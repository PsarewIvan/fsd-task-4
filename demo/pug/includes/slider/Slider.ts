import $ from 'jquery';
import Panel from '../panel/Panel';
import { Settings } from './../../../types';
class Slider {
  private slider: HTMLDivElement;
  private panel: Panel;
  private panelRoot: HTMLDivElement;
  private state: Partial<Settings>;

  constructor(root: HTMLDivElement, state: Partial<Settings>) {
    this.slider = root.querySelector('.js-slider');
    this.panelRoot = root.querySelector('.js-slider__panel');
    $(this.slider).freeSlider(state);
    this.updateState();
    this.panel = new Panel(
      this.panelRoot,
      this.state,
      this.callback.bind(this)
    );
    this.addUpdateCallback();
    this.changeSliderClassModificator(state.orientation);
  }

  private callback(newState: Partial<Settings>): void {
    $(this.slider).freeSlider('update', newState);
    this.changeSliderClassModificator(newState.orientation);
    this.updateState();
    this.panel.updateElements(this.state);
  }

  private updateState(state?: Partial<Settings>): void {
    this.state = state ? state : $(this.slider).freeSlider('getState');
  }

  private addUpdateCallback(): void {
    $(this.slider).freeSlider('onLoad', this.updateElements.bind(this));
    $(this.slider).freeSlider('onChange', this.updateElements.bind(this));
  }

  private updateElements(state: Partial<Settings>): void {
    this.updateState(state);
    this.panel.updateElements(this.state);
  }

  changeSliderClassModificator(orientation: string): void {
    switch (orientation) {
      case 'horizontal':
        this.slider.classList.add('slider__wrapper--horizontal');
        this.slider.classList.remove('slider__wrapper--vertical');
        break;
      case 'vertical':
        this.slider.classList.add('slider__wrapper--vertical');
        this.slider.classList.remove('slider__wrapper--horizontal');
        break;
    }
  }
}

export default Slider;
