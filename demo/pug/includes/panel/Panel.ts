import InputThumbs from '../input-thumbs/Input-thumbs';
import InputMin from '../input-min/Input-min';
import InputMax from '../input-max/Input-max';
import InputStep from '../input-step/Input-step';
import InputHints from '../input-hints/Input-hints';
import InputTooltips from '../input-tooltips/Input-tooltips';
import InputScale from '../input-scale/Input-scale';
import InputOrientation from '../input-orientation/Input-orientation';
import InputType from '../input-type/Input-type';
import { Settings } from '../../../../src/types';

export default class Panel {
  private panel: HTMLDivElement;
  private thumbs: InputThumbs;
  private min: InputMin;
  private max: InputMax;
  private step: InputStep;
  private hints: InputHints;
  private tooltips: InputTooltips;
  private scale: InputScale;
  private orientation: InputOrientation;
  private type: InputType;

  constructor(
    root: HTMLDivElement,
    state: Partial<Settings>,
    callback: Function
  ) {
    this.panel = root.querySelector('.js-panel');
    this.thumbs = new InputThumbs(this.panel, state, callback);
    this.min = new InputMin(this.panel, state, callback);
    this.max = new InputMax(this.panel, state, callback);
    this.step = new InputStep(this.panel, state, callback);
    this.hints = new InputHints(this.panel, state, callback);
    this.tooltips = new InputTooltips(this.panel, state, callback);
    this.scale = new InputScale(this.panel, state, callback);
    this.orientation = new InputOrientation(this.panel, state, callback);
    this.type = new InputType(this.panel, state, callback);
  }

  public updateElements(state: Partial<Settings>): void {
    this.thumbs.update(state);
    this.min.update(state.min);
    this.max.update(state.max);
  }
}
