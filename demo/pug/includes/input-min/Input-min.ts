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
    this.input.addEventListener(
      'change',
      this.handleInputChange.bind(this, callback)
    );
  }

  public update(min: number): void {
    this.input.value = min.toString();
  }

  private handleInputChange(callback: Function): void {
    callback({ min: Number(this.input.value) });
  }
}

export default InputMin;
