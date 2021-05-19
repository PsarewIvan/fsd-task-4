import { Settings, CallBack } from './../../../types';

class InputStep {
  private input: HTMLInputElement;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: CallBack
  ) {
    this.input = panel.querySelector('.js-input-step__input');
    this.input.min = `0`;
    this.input.max = (state.max - state.min).toString();
    this.input.value = state.step.toString();
    this.input.addEventListener(
      'change',
      this.handleInputChange.bind(this, callback)
    );
  }

  private handleInputChange(callback: CallBack): void {
    callback({ step: Number(this.input.value) });
  }
}

export default InputStep;
