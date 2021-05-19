import SliderElement from './SliderElement';
import { Settings, RequiredThumb, HandleThumbParameter } from '../../types';

class Thumbs {
  readonly state: Settings;
  private property: string[];
  private thumbs: SliderElement[];

  constructor(rootNode: HTMLElement, state: Settings) {
    this.state = state;
    this.property = ['--input-value-first', '--input-value-second'];
    this.render(rootNode);
  }

  // Обновляет состояние ползунков
  public update(percents: number[], values: number[], hints: boolean): void {
    this.updatePosition(percents);
    if (hints) {
      this.updateHints(values);
    } else {
      this.clearHints();
    }
  }

  // Создает слушателей на ползунках для обработки событий
  // работы пользователя
  public addMouseListener(handler: Function, onFinish: Function): void {
    this.thumbs.forEach((thumb: SliderElement) => {
      this.mouseListener(thumb, handler, onFinish);
    });
  }

  // Метод считывает движения пользователя при движении ползунков
  public mouseMoveEvent(
    currentThumb: SliderElement,
    evt: PointerEvent,
    handler: Function,
    onFinish: Function
  ): void {
    const clickOffset =
      evt[currentThumb.coordsType] -
      currentThumb.distanceToScreen -
      this.getThumbSize() / 2;

    const handleDocumentPointerMove = (evt: PointerEvent): void => {
      evt.preventDefault();
      window.ontouchmove = (evt: Event) => {
        evt.preventDefault();
      };
      const index = this.getCurrentThumbIndex(currentThumb);
      const thumbShift = evt[currentThumb.coordsType] - clickOffset;
      handler(thumbShift, index);
    };

    const handleDocumentPointerUp = (): void => {
      if (typeof onFinish === 'function') onFinish();
      window.ontouchmove = null;
      document.removeEventListener('pointermove', handleDocumentPointerMove);
      document.removeEventListener('pointerup', handleDocumentPointerUp);
    };

    document.addEventListener('pointermove', handleDocumentPointerMove);
    document.addEventListener('pointerup', handleDocumentPointerUp);
  }

  // Возвращает объект с данными ползунка, который необходимо
  // подвинуть при клике на Track
  public requiredThumb(clickOffset: number): RequiredThumb {
    const reqThumbState: RequiredThumb = {
      index: 0,
      root: this.thumbs[0],
    };
    if (this.state.type === 'single') {
      return reqThumbState;
    }

    const range =
      this.thumbs[1].distanceToScreen - this.thumbs[0].distanceToScreen;
    if (clickOffset > this.thumbs[0].distanceToScreen + range / 2) {
      reqThumbState.index = 1;
      reqThumbState.root = this.thumbs[1];
    }
    return reqThumbState;
  }

  public getThumbSize(): number {
    return this.thumbs[0].size;
  }

  // Отрисует необходимые ползунки в родительском элементе
  private render(rootNode: HTMLElement): void {
    if (this.state.type === 'range') {
      this.thumbs = [
        new SliderElement(
          rootNode,
          ['free-slider__thumb'],
          this.state.orientation
        ),
        new SliderElement(
          rootNode,
          ['free-slider__thumb', 'free-slider__thumb--second'],
          this.state.orientation
        ),
      ];
    } else {
      this.thumbs = [
        new SliderElement(
          rootNode,
          ['free-slider__thumb'],
          this.state.orientation
        ),
      ];
    }
  }

  // Обновляет местоположение ползунков на слайдере
  private updatePosition(percents: number[]): void {
    this.thumbs.forEach((thumb: SliderElement, i: number) => {
      thumb.root.style[thumb.directionType] = `${percents[i] * 100}%`;
    });
  }

  // Обновляет числовое значение над ползунком
  private updateHints(values: number[]): void {
    this.thumbs.forEach((thumb: SliderElement, i: number) => {
      thumb.root.style.setProperty(this.property[i], `"${values[i]}"`);
    });
  }

  private clearHints(): void {
    this.thumbs.forEach((thumb: SliderElement, i: number) => {
      thumb.root.style.setProperty(this.property[i], ``);
    });
  }

  // Слушатель для обработки пользовательских событий
  // при клике на ползунок и его движении
  private mouseListener(
    currentThumb: SliderElement,
    handler: Function,
    onFinish: Function
  ): void {
    currentThumb.root.addEventListener(
      'pointerdown',
      this.handleThumbPointerDown.bind(this, {
        currentThumb,
        handler,
        onFinish,
      })
    );

    currentThumb.root.ondragstart = function () {
      return false;
    };
  }

  private handleThumbPointerDown(
    param: HandleThumbParameter,
    evt: PointerEvent
  ): void {
    evt.preventDefault();
    this.mouseMoveEvent(param.currentThumb, evt, param.handler, param.onFinish);
  }

  private getCurrentThumbIndex(currentThumb: SliderElement): number {
    return this.thumbs.findIndex((thumb) => thumb.root === currentThumb.root);
  }
}

export default Thumbs;
