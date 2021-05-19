// Слой для управления отображением, который содержит логику,
// связанную с отображением, а также реагирует на взаимодействие
// пользователя с приложением

import { Settings, SliderOrientation } from '../../types';
import Track from './Track';
import Rail from './Rail';
import Bar from './Bar';
import Tooltips from './Tooltips';

class View {
  private root: HTMLElement;
  private wrapper: HTMLElement;
  private isFirstChange: boolean;
  private track: Track;
  private rail: Rail;
  private bar: Bar;
  private tooltips: Tooltips;

  constructor(rootNode: HTMLElement, settings: Settings) {
    this.root = rootNode;
    this.isFirstChange = true;

    this.createWrapper(settings.orientation);
    this.render(settings);
    this.update(settings);
  }

  // Обновляет элементы слайдера
  public update(settings: Settings): void {
    this.rail.update(settings);
    this.bar.update(this.formatPercents(settings.percents));
    this.tooltips.update(settings);
    if (settings.onUpdate && this.isFirstChange) {
      settings.onUpdate(settings.values);
    }
    this.isFirstChange = false;
  }

  // Создает слушателей за наблюдением состояния слайдера
  // при взаимодействии пользователя
  public viewChange(handler: Function, onFinish: Function): void {
    this.rail.addListeners(handler, onFinish);
    this.track.clickEvent((clickCoords: number, evt: PointerEvent) => {
      this.rail.clickHandler(clickCoords, handler, evt, onFinish);
    });
  }

  public destroyAll(): void {
    this.root.innerHTML = '';
  }

  // Создает необходимые компоненты слайдера и размещает их
  // в созданном родительском компоненте, который помещается
  // в элемент на котором был создан слайдер
  private render(settings: Settings): void {
    this.track = new Track(this.wrapper, settings);
    this.rail = new Rail(this.wrapper, settings);
    this.bar = new Bar(this.wrapper, settings);
    this.tooltips = new Tooltips(this.wrapper);
  }

  private createWrapper(orientation: SliderOrientation): void {
    this.wrapper = document.createElement('span');
    if (orientation === 'vertical') {
      this.wrapper.classList.add('free-slider', 'free-slider--vertical');
    } else if (orientation === 'horizontal') {
      this.wrapper.classList.add('free-slider', 'free-slider--horizontal');
    }
    this.root.append(this.wrapper);
  }

  // Форматирует текущее процентное значение в проценты необходимые
  // для отрисовки бара
  private formatPercents(percents: number[]): number[] {
    const trackSize = this.track.size;
    const thumbsSize = this.rail.getThumbSize();
    const ratio = (trackSize - thumbsSize) / trackSize;
    const extraRatio = thumbsSize / trackSize / 2;
    const formatPercents = percents.map((percent) => {
      return percent * ratio + extraRatio;
    });
    return formatPercents;
  }
}

export default View;
