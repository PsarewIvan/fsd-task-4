import { Settings, CallBack } from './../../../types';

class InputMax {
  private input: HTMLInputElement;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: CallBack
  ) {
    this.input = panel.querySelector('.js-input-max__input');
    this.input.value = state.max.toString();
    this.input.addEventListener(
      'change',
      this.handleInputChange.bind(this, callback)
    );
  }

  public update(max: number): void {
    this.input.value = max.toString();
  }

  private handleInputChange(callback: CallBack): void {
    callback({ max: Number(this.input.value) });
  }
}

export default InputMax;
