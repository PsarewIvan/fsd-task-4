import { Settings } from './../../../types';

class InputMin {
  private input: HTMLInputElement;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: Function
  ) {
    this.input = panel.querySelector('.js-input-min__input');
    this.input.value = state.min.toString();
    this.updateAttribute(state.values);
    this.input.addEventListener(
      'change',
      this.handleInputChange.bind(this, callback)
    );
  }

  private handleInputChange(callback: Function): void {
    if (Number(this.input.value) > Number(this.input.max)) {
      this.input.value = this.input.max;
    }
    callback({ min: Number(this.input.value) });
  }

  public updateAttribute(values: number[]): void {
    this.input.max = values[0].toString();
  }
}

export default InputMin;
