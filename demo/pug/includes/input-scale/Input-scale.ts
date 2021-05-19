import { Settings, CallBack } from './../../../types';

class InputScale {
  private input: HTMLInputElement;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: CallBack
  ) {
    this.input = panel.querySelector('.js-input-scale__input');
    this.input.checked = state.scale;
    this.input.addEventListener(
      'change',
      this.handleInputChange.bind(this, callback)
    );
  }

  private handleInputChange(callback: CallBack): void {
    callback({ scale: this.input.checked });
  }
}

export default InputScale;
