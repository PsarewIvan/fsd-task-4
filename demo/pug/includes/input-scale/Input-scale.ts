import { Settings } from './../../../types';

class InputScale {
  private input: HTMLInputElement;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: Function
  ) {
    this.input = panel.querySelector('.js-input-scale__input');
    this.input.checked = state.scale;
    this.input.addEventListener(
      'change',
      this.handleInputChange.bind(this, callback)
    );
  }

  private handleInputChange(callback: Function): void {
    callback({ scale: this.input.checked });
  }
}

export default InputScale;
