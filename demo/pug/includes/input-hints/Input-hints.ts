import { Settings, CallBack } from './../../../types';

class InputHints {
  private input: HTMLInputElement;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: CallBack
  ) {
    this.input = panel.querySelector('.js-input-hints__input');
    this.input.checked = state.hints;

    this.input.addEventListener(
      'change',
      this.handleInputChange.bind(this, callback)
    );
  }

  private handleInputChange(callback: CallBack): void {
    callback({ hints: this.input.checked });
  }
}

export default InputHints;
