// Слой управления данными, который содержит бизнес-логику
import _ from 'lodash';
import MakeObservableSubject from './makeObservableSubject';
import {
  Settings,
  SliderOrientation,
  ModelConstants,
  SliderType,
} from '../types';

class Model {
  private settings: Settings;
  readonly constants: ModelConstants;
  public modelChangedSubject: MakeObservableSubject;

  constructor(options: Partial<Settings>) {
    this.constants = {
      SINGLE: 'single',
      RANGE: 'range',
      HORIZONTAL: 'horizontal',
      VERTICAL: 'vertical',
    };
    this.modelChangedSubject = new MakeObservableSubject();
    const defaultParameter = this.getDefaultParameter(options);
    if (options) {
      const newOptions = { ...defaultParameter, ...options };
      this.optionsCheckAndRewrite(newOptions);
      this.setSettings(newOptions, defaultParameter);
    } else {
      this.setSettings(defaultParameter);
    }
  }

  // Производит проверки перед обновлением модели
  public updateModel(newSettings: Partial<Settings>): void {
    const isHintsChange =
      typeof newSettings.hints === 'boolean' &&
      newSettings.hints !== this.settings.hints;
    const isTooltipsChange =
      typeof newSettings.tooltips === 'boolean' &&
      newSettings.tooltips !== this.settings.tooltips;

    if (newSettings.values) {
      this.updateValues(newSettings.values);
    }
    if (typeof newSettings.step === 'number') {
      this.updateStep(newSettings.step);
    }
    if (typeof newSettings.min === 'number') {
      this.updateMin(newSettings.min);
    }
    if (typeof newSettings.max === 'number') {
      this.updateMax(newSettings.max);
    }
    if (typeof newSettings.scale === 'boolean') {
      this.setSettings({ scale: newSettings.scale });
    }
    if (isHintsChange) {
      this.setSettings({ hints: newSettings.hints });
    }
    if (isTooltipsChange) {
      this.setSettings({ tooltips: newSettings.tooltips });
    }
    if (newSettings.orientation) {
      this.changeOrientation(newSettings.orientation);
    }
    if (newSettings.type) {
      this.changeType(newSettings.type);
    }
  }

  // Возвращает значения с дополнительными полями, требуемыми для
  // корректной работы View:
  // settings.percents - массив значений в процентах
  public getSettings(): Settings {
    const settingsClone = _.cloneDeep(this.settings);
    const range = settingsClone.max - settingsClone.min;
    settingsClone.percents = settingsClone.values.map((value: number) => {
      return (value - settingsClone.min) / range;
    });
    return settingsClone;
  }

  // Устанавливает новые значения слайдера в зависимости от
  // смещения конкретного ползунка в процентах
  public setNewValue(thumbPercentOffset: number, index: number): void {
    const calcValue = this.calcValue(thumbPercentOffset);
    if (this.settings.type === this.constants.SINGLE) {
      this.updateModel({ values: [calcValue] });
    } else {
      const newValues = [...this.settings.values];
      newValues[index] = calcValue;
      this.updateModel({ values: newValues });
    }
  }

  private getDefaultParameter(options: Partial<Settings>): Settings {
    let defaultParam: Settings = {
      min: 0,
      max: 100,
      step: 1,
      orientation: this.constants.HORIZONTAL,
      tooltips: true,
      scale: false,
      hints: true,
      scaleMark: 4,
      subScaleMark: 5,
      percents: [],
      onChange: null,
      onFinish: null,
      onUpdate: null,
    };

    if (options && options.type === this.constants.RANGE) {
      defaultParam = {
        ...defaultParam,
        ...{
          values: [10, 90],
          type: this.constants.RANGE,
        },
      };
    } else {
      defaultParam = {
        ...defaultParam,
        ...{
          values: [50],
          type: this.constants.SINGLE,
        },
      };
    }
    return defaultParam;
  }

  // Проверяет изменились ли значения и вызывает метод записи
  // новых значений слайдера
  private updateValues(values: number[]): void {
    const updatedValues = this.changeInputValues(values);
    const isValuesUpdate = !this.isEqual(updatedValues, this.settings.values);
    if (isValuesUpdate) {
      this.setSettings({ values: updatedValues });
      this.modelChangedSubject.notify('onChange', this.getSettings());
      this.onChangeCallback();
    }
  }

  // Изменяет новые значения, если они выходят из диапазона допустимых
  // значений
  private changeInputValues(values: number[]): number[] {
    const updatedFromStepValues = values.map((val) => {
      return this.round(
        Math.round(val / this.settings.step) * this.settings.step,
        5
      );
    });
    const currentValues = this.getSettings().values;
    currentValues.forEach((value, i) => {
      if (typeof updatedFromStepValues[i] !== 'number')
        updatedFromStepValues[i] = value;
      if (updatedFromStepValues[i] < this.settings.min)
        updatedFromStepValues[i] = this.settings.min;
      if (updatedFromStepValues[i] > this.settings.max)
        updatedFromStepValues[i] = this.settings.max;
    });
    const clone = _.cloneDeep(this.settings.values);
    const isChangeBoth =
      updatedFromStepValues[0] !== clone[0] &&
      updatedFromStepValues[1] !== clone[1];
    const isChangeFirst =
      updatedFromStepValues[0] !== clone[0] &&
      updatedFromStepValues[1] === clone[1];
    const isChangeSecond =
      updatedFromStepValues[0] === clone[0] &&
      updatedFromStepValues[1] !== clone[1];
    const isFirstGreater = updatedFromStepValues[0] > clone[1];
    const isSecondLess = updatedFromStepValues[1] < clone[0];
    if (isChangeBoth) {
      updatedFromStepValues.sort((a, b) => a - b);
    }
    if (isChangeFirst && isFirstGreater) {
      updatedFromStepValues[0] = clone[1];
    }
    if (isChangeSecond && isSecondLess) {
      updatedFromStepValues[1] = clone[0];
    }
    return updatedFromStepValues;
  }

  private updateStep(step: number): void {
    const range = this.settings.max - this.settings.min;
    if (step < 0) step = 1;
    if (step > range) step = range;
    this.setSettings({ step: step });
  }

  private updateMin(value: number): void {
    const minThumbValues = this.settings.values[0];
    const maxMinValue = this.settings.max - this.settings.step;

    if (value <= minThumbValues) {
      this.setSettings({ min: value });
    }
    if (value > minThumbValues && value <= maxMinValue) {
      this.setSettings({ min: value });
      this.updateValues([value].concat(this.settings.values.slice(1)));
    }
    if (value > maxMinValue) {
      this.setSettings({ min: maxMinValue });
      this.updateValues([maxMinValue].concat(this.settings.values.slice(1)));
    }
  }

  private updateMax(value: number): void {
    const maxThumbValues =
      this.settings.values[this.settings.values.length - 1];
    const minMaxValues = this.settings.min + this.settings.step;

    if (value >= maxThumbValues) {
      this.setSettings({ max: value });
    }
    if (value < maxThumbValues && value >= minMaxValues) {
      this.setSettings({ max: value });
      this.updateValues(
        this.settings.values
          .slice(0, this.settings.values.length - 1)
          .concat(value)
      );
    }
    if (value < minMaxValues) {
      this.setSettings({ max: minMaxValues });
      this.updateValues(
        this.settings.values
          .slice(0, this.settings.values.length - 1)
          .concat(minMaxValues)
      );
    }
  }

  private changeOrientation(orientation: SliderOrientation): void {
    const isInputValid =
      orientation === this.constants.HORIZONTAL ||
      orientation === this.constants.VERTICAL;
    const isInputChange = orientation !== this.settings.orientation;
    if (isInputValid && isInputChange) {
      this.setSettings({ orientation: orientation });
      this.modelChangedSubject.notify('rebuildView');
    }
  }

  private changeType(type: SliderType): void {
    const isTypeValid =
      type === this.constants.SINGLE || type === this.constants.RANGE;
    const isTypeChange = type !== this.settings.type;
    if (isTypeValid && isTypeChange) {
      this.setSettings({ type: type });
      const newValues =
        type === this.constants.SINGLE
          ? [(this.settings.max + this.settings.min) / 2]
          : [this.settings.min, this.settings.max];
      this.setSettings({ values: newValues });
      this.modelChangedSubject.notify('onChange', this.getSettings());
      this.onChangeCallback();
      this.modelChangedSubject.notify('rebuildView');
    }
  }

  // Записывает новые значения слайдера, объединяя новые значения
  // со старыми
  private setSettings(
    newSettings: Partial<Settings>,
    oldSettings: Settings = this.settings
  ): void {
    this.settings = { ...oldSettings, ...newSettings };
    this.modelChangedSubject.notify('viewUpdate', this.getSettings());
  }

  // Проверка новых значений и их перезапись в случае выхода из диапазона
  private optionsCheckAndRewrite(options: Partial<Settings>): void {
    options.values.forEach((value: number, i: number): void => {
      if (value < options.min) options.values[i] = options.min;
      if (value > options.max) options.values[i] = options.max;
    });
  }

  // Возвращает новое корректное значения в зависимости от
  // установленного шага и смещения в процентах
  private calcValue(thumbPercentOffset: number): number {
    let step = this.settings.step;
    let value =
      this.settings.min +
      (this.settings.max - this.settings.min) * thumbPercentOffset;
    const isValueInRange =
      value < this.settings.max && value > this.settings.min;
    const isAddStep = value % step > step / 2;
    const isDeductStep = value % step < step / 2;
    if (isAddStep && isValueInRange) value = value + step - (value % step);
    if (isDeductStep && isValueInRange) value = value - (value % step);
    return value;
  }

  // Метод для округления неточных значений
  private round(
    number: number,
    digits = 0,
    base = Math.pow(10, digits)
  ): number {
    return Math.round(base * number) / base;
  }

  // Проверка равенства простых массивов
  private isEqual(arr1: number[], arr2: number[]): boolean {
    const isEqualLength = arr1.length !== arr2.length;
    const isSameInside = arr1.join() !== arr2.join();
    if (isEqualLength || isSameInside) return false;
    return true;
  }

  private onChangeCallback(): void {
    if (typeof this.settings.onChange === 'function') {
      this.settings.onChange(_.cloneDeep(this.settings.values));
    }
  }
}

export default Model;
