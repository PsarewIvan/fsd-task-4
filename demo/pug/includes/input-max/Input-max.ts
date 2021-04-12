import { Settings } from './../../../types';

class InputMax {
  private input: HTMLInputElement;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: Function
  ) {
    this.input = panel.querySelector('.js-input-max__input');
    this.input.value = state.max.toString();
    this.updateAttribute(state.values);
    this.input.addEventListener(
      'change',
      this.handleInputChange.bind(this, callback)
    );
  }

  private handleInputChange(callback: Function): void {
    if (Number(this.input.value) < Number(this.input.min)) {
      this.input.value = this.input.min;
    }
    callback({ max: Number(this.input.value) });
  }

  private updateAttribute(values: number[]): void {
    this.input.min = values[values.length - 1].toString();
  }
}

export default InputMax;
