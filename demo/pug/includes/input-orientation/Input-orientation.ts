import { Settings } from './../../../types';

class InputOrientation {
  private inputs: NodeListOf<HTMLInputElement>;
  static id: number;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: Function
  ) {
    InputOrientation.id += 1;
    this.inputs = panel.querySelectorAll('.js-input-orientation__input');
    this.modifyInputName();
    if (state.orientation === 'horizontal') {
      this.inputs[0].checked = true;
    }
    if (state.orientation === 'vertical') {
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
    callback({ orientation: input.value });
  }

  private modifyInputName(): void {
    this.inputs.forEach((input) => {
      input.name = `orientation-${InputOrientation.id}`;
    });
  }
}

InputOrientation.id = 0;
export default InputOrientation;
