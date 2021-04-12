import { Settings } from './../../../types';

class InputType {
  private inputs: NodeListOf<HTMLInputElement>;
  static id: number;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: Function
  ) {
    InputType.id += 1;
    this.inputs = panel.querySelectorAll('.js-input-type__input');
    this.modifyInputName();
    if (state.type === 'single') {
      this.inputs[0].checked = true;
    }
    if (state.type === 'range') {
      this.inputs[1].checked = true;
    }
    this.inputs.forEach((input) => {
      input.addEventListener(
        'change',
        this.handleInputChange.bind(this, callback, input)
      );
    });
  }

  private handleInputChange(callback: Function, input: HTMLInputElement): void {
    callback({ type: input.value });
  }

  private modifyInputName(): void {
    this.inputs.forEach((input) => {
      input.name = `type-${InputType.id}`;
    });
  }
}

InputType.id = 0;
export default InputType;
