// Слой для управления отображением, который содержит логику,
// связанную с отображением, а также реагирует на взаимодействие
// пользователя с приложением

import { Settings } from '../types';
import MakeObservableSubject from './makeObservableSubject';

export default class View {
  private html: string;
  private inputElement: HTMLElement;
  private sliderElement: HTMLElement;
  private barElement: HTMLElement;
  private pinElement: HTMLElement;
  private lineElement: HTMLElement;
  private minElement: HTMLElement;
  private maxElement: HTMLElement;
  private onChange: Function;
  private onFinish: Function;
  public viewChangedSubject: MakeObservableSubject;
  public inputValue: number;

  constructor(element: HTMLElement, settings: Settings) {
    this.html = `
      <span class="my-slider__wrapper">
        <span class="my-slider__model">
          <span class="my-slider__line"></span>
          <span class="my-slider__min">0</span>
          <span class="my-slider__max">1</span>
        </span>
        <span class="my-slider__bar"></span>
        <span class="my-slider__handle"></span>
      </span>`;
    this.viewChangedSubject = new MakeObservableSubject();
    this.onChange = settings.onChange;
    this.onFinish = settings.onFinish;
    this.init(element, settings);
  }

  private addElements(): void {
    this.inputElement.insertAdjacentHTML('afterend', this.html);
  }

  public drawSlider(settings: Object): void {
    this.minElement.innerHTML = settings.min;
    this.maxElement.innerHTML = settings.max;

    const offsetPin: string = `${(settings.value - settings.min) * (this.lineElement.offsetWidth - this.pinElement.offsetWidth) / (settings.max - settings.min) + this.pinElement.offsetWidth / 2}px`;
    this.pinElement.style.left = offsetPin;
    this.barElement.style.width = offsetPin;
  }

  private changePin(settings: Object): void {
    this.pinElement.addEventListener('mousedown', (evt) => {
      evt.preventDefault();
      this.pinElement.style.willChange = 'left';
      this.barElement.style.willChange = 'width';
      let shiftX = evt.clientX - this.pinElement.getBoundingClientRect().left;

      const onMouseMove = (moveEvt: Object): void => {
        moveEvt.preventDefault();

        let pinCords = moveEvt.clientX - shiftX - this.lineElement.getBoundingClientRect().left + this.pinElement.offsetWidth / 2;

        if (pinCords < this.pinElement.offsetWidth / 2) {
          pinCords = this.pinElement.offsetWidth / 2;
        }

        let rightEdge = this.lineElement.offsetWidth - this.pinElement.offsetWidth / 2;

        if (pinCords > rightEdge) {
          pinCords = rightEdge;
        }

        this.inputValue = this.getInputValue(settings, pinCords);
        this.inputElement.value = this.inputValue;

        this.pinElement.style.left = pinCords + 'px';
        this.pinElement.style.setProperty('--input-value', `"${this.inputValue.toString()}"`);
        this.barElement.style.width = pinCords + 'px';

        if (this.onChange) {
          this.onChange(this.inputValue);
        }
      }

      const onMouseUp = (): void => {
        this.pinElement.style.willChange = 'auto';
        this.barElement.style.willChange = 'auto';

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        this.viewChangedSubject.notify({
          value: this.inputValue
        });

        if (this.onFinish) {
          this.onFinish(this.inputValue);
        }
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    this.pinElement.ondragstart = function () {
      return false;
    };
  }

  private getInputValue(settings: Object, pinCords: number): number {
    return Math.floor( (settings.max - settings.min) * (pinCords - this.pinElement.offsetWidth / 2) / (this.lineElement.offsetWidth - this.pinElement.offsetWidth) + settings.min );
  }

  private init(element: HTMLElement, settings: Object): void {
    this.inputElement = element;
    this.inputElement.classList.add('my-slider__input');
    this.addElements();
    this.sliderElement = this.inputElement.parentElement.querySelector('.my-slider__wrapper');
    this.barElement = this.sliderElement.querySelector('.my-slider__bar');
    this.pinElement = this.sliderElement.querySelector('.my-slider__handle');
    this.lineElement = this.sliderElement.querySelector('.my-slider__line');
    this.minElement = this.sliderElement.querySelector('.my-slider__min');
    this.maxElement = this.sliderElement.querySelector('.my-slider__max');

    this.inputValue = settings.value;
    this.inputElement.value = settings.value;
    this.pinElement.style.setProperty('--input-value', `"${settings.value}"`);

    this.drawSlider(settings);
    this.changePin(settings);
  }
};