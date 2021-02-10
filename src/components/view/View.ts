// Слой для управления отображением, который содержит логику,
// связанную с отображением, а также реагирует на взаимодействие
// пользователя с приложением

import { Settings, State, RequiredThumb, ThumbType } from '../../types';
import Track from './Track';
import Thumbs from './Thumbs';
import Bar from './Bar';
import Scale from './Scale';
import Tooltips from './Tooltips';

export default class View {
  private root: HTMLElement;
  private slider: HTMLElement;
  private onChange: Function | undefined;
  private onUpdate: Function | undefined;
  private isFirstChange: boolean;
  private track: Track;
  private bar: Bar;
  private scale?: Scale;
  private thumbs: Thumbs;
  private tooltips?: Tooltips;
  private state: State;

  constructor(rootNode: HTMLElement, settings: Settings) {
    this.root = rootNode;
    this.onChange = settings.onChange;
    this.onUpdate = settings.onUpdate;
    this.isFirstChange = true;

    this.render(settings);
    this.update(settings);
  }

  // Создает необходимые компоненты слайдера и размещает их
  // в созданном родительском компоненте, который помещается
  // в элемент на котором был создан слайдер
  private render(settings: Settings): void {
    this.slider = document.createElement('span');
    if (settings.orientation === 'vertical') {
      this.slider.classList.add('free-slider', 'free-slider--vertical');
    } else if (settings.orientation === 'horizontal') {
      this.slider.classList.add('free-slider', 'free-slider--horizontal');
    }
    this.root.append(this.slider);

    this.track = new Track(this.slider, {
      type: settings.type,
      orientation: settings.orientation,
    });
    this.bar = new Bar(this.slider, {
      type: settings.type,
      orientation: settings.orientation,
    });
    this.thumbs = new Thumbs(this.slider, {
      type: settings.type,
      orientation: settings.orientation,
      min: settings.min,
      max: settings.max,
      isHints: settings.hints,
    });
    if (settings.scale) {
      const percentSize: number =
        ((this.track.getTrackSize() - this.thumbs.getThumbSize()) /
          this.track.getTrackSize()) *
        100;
      this.scale = new Scale(this.slider, percentSize, {
        orientation: settings.orientation,
        markNumber: settings.scaleMark,
        subMarkNumber: settings.subScaleMark,
        min: settings.min,
        max: settings.max,
      });
    }
    if (settings.tooltips) {
      this.tooltips = new Tooltips(this.slider, {
        min: settings.min,
        max: settings.max,
      });
    }
  }

  // Обновляет положение движущихся элементов слайдера
  public update(settings: Settings): void {
    this.state = { type: settings.type, orientation: settings.orientation };
    const percentsToView: Array<number> = this.formatPercentsToSubview(
      settings.percents
    );
    this.thumbs.update(percentsToView, settings.values);
    this.bar.update(percentsToView);

    if (this.onUpdate && this.isFirstChange) {
      this.onUpdate(settings.values);
    }
    if (this.onChange && !this.isFirstChange) {
      this.onChange(settings.values);
    }
    this.isFirstChange = false;
  }

  // Форматирует текущее процентное значение в проценты необходимые
  // для отрисовки компонентов слайдера
  private formatPercentsToSubview(percents: Array<number>): Array<number> {
    const trackSize: number = this.track.getTrackSize();
    const thumbsSize: number = this.thumbs.getThumbSize();
    const ratio: number = (trackSize - thumbsSize) / trackSize;
    if (this.state.type === 'single') {
      return [percents[0] * ratio];
    } else if (this.state.type === 'range') {
      return [percents[0] * ratio, percents[1] * ratio];
    }
  }

  // Создает слушателей за наблюдением состояния слайдера
  // при взаимодействии пользователя
  public viewChanged(handler: Function, onFinish: Function) {
    // Слушатель на ползунки
    this.thumbs.addMouseListener((thumbShift: number, type: string) => {
      const percent = this.percentFromThumbShift(thumbShift);
      handler(percent, type);
    }, onFinish);

    // Слушатель на клики по треку
    this.track.clickEvent((clickCoord: number, evt: MouseEvent) => {
      this.clickHandler(clickCoord, handler, evt, onFinish);
    });

    // Слушатель на шкалу значений
    if (this.scale) {
      this.scale.clickEvent((clickCoord: number, evt: MouseEvent) => {
        this.clickHandler(clickCoord, handler, evt, onFinish);
      });
    }
  }

  // Функция обработчик, вызывающаяся для перемещения ползунков
  private clickHandler(
    clickCoord: number,
    handler: Function,
    evt: MouseEvent,
    onFinish: Function
  ): void {
    const clickOffset: number = clickCoord - this.thumbs.getThumbSize() / 2;
    const percent = this.percentFromThumbShift(clickOffset);
    const requiredThumb: RequiredThumb = this.thumbs.requiredThumb(clickOffset);
    handler(percent, requiredThumb.name);

    this.thumbs.mouseMoveEvent(
      requiredThumb.root,
      evt,
      (thumbShift: number) => {
        const percent = this.percentFromThumbShift(thumbShift);
        handler(percent, requiredThumb.name);
      },
      onFinish
    );
  }

  // Возвращает значение смещения ползунка в процентах, относительно
  // ширины рабочей области слайдера
  private percentFromThumbShift(thumbShift: number): number {
    const trackSize: number = this.track.getTrackSize();
    const distanceFromTrackToScreen: number = this.track.getDistanceToScreen();
    const thumbSize: number = this.thumbs.getThumbSize();
    let percent: number =
      (thumbShift - distanceFromTrackToScreen) / (trackSize - thumbSize);

    if (percent <= 0) {
      percent = 0;
    }
    if (percent >= 1) {
      percent = 1;
    }
    return percent;
  }
}