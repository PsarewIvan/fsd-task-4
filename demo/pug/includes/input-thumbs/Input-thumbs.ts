import { Settings } from './../../../types';

class InputThumbs {
  private inputs: NodeListOf<HTMLInputElement>;
  readonly LABEL_HIDE_CLASS: string;

  constructor(
    panel: HTMLDivElement,
    state: Partial<Settings>,
    callback: Function
  ) {
    this.LABEL_HIDE_CLASS = 'input-thumbs__label--hide';
    this.inputs = panel.querySelectorAll('.js-input-thumbs__input');
    if (state.type === 'single') {
      this.inputs[1].parentElement.classList.add(this.LABEL_HIDE_CLASS);
    }
    this.updateValues(state);
    this.updateAttribute(state);
    this.inputs.forEach((input, i) => {
      input.addEventListener(
        'change',
        this.handleInputChange.bind(this, callback, i)
      );
    });
  }

  public update(state: Partial<Settings>): void {
    this.updateValues(state);
    this.updateAttribute(state);
  }

  private updateValues(state: Partial<Settings>): void {
    state.values.forEach((value, i) => {
      this.inputs[i].value = value.toString();
    });
  }

  private updateAttribute(state: Partial<Settings>): void {
    state.values.forEach((_value, i) => {
      this.inputs[i].max = state.values[i + 1]
        ? state.values[i + 1].toString()
        : state.max.toString();
      this.inputs[i].min =
        state.values[i - 1] && i > 0
          ? state.values[i - 1].toString()
          : state.min.toString();
      this.inputs[i].step = state.step.toString();
    });
  }

  private handleInputChange(callback: Function, index: number): void {
    const values = [];
    values[index] = Number(this.inputs[index].value);
    callback({ values: values });
  }
}

export default InputThumbs;
