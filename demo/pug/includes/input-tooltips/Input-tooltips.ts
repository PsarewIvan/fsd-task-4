import { Settings } from './../../../types';

class InputTooltips {
  private input: HTMLInputElement;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: Function
  ) {
    this.input = panel.querySelector('.js-input-tooltips__input');
    this.input.checked = state.tooltips;
    this.input.addEventListener(
      'change',
      this.handleInputChange.bind(this, callback)
    );
  }

  private handleInputChange(callback: Function): void {
    callback({ tooltips: this.input.checked });
  }
}

export default InputTooltips;
