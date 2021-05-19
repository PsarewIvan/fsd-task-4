import SliderElement from './SliderElement';
import Thumbs from './Thumbs';
import Scale from './Scale';
import {
  Settings,
  RequiredThumb,
  ViewChangeHandler,
  ViewOnFinishCallback,
} from '../../types';

class Rail extends SliderElement {
  private scale: Scale;
  private thumbs: Thumbs;

  constructor(rootNode: HTMLElement, state: Settings) {
    super(rootNode, ['free-slider__rail'], state.orientation);
    this.thumbs = new Thumbs(this.root, state);
    this.scale = new Scale(this.root, state);
  }

  public update(settings: Settings): void {
    this.thumbs.update(settings.percents, settings.values, settings.hints);
    this.scale.update(settings);
  }

  public addListeners(
    handler: ViewChangeHandler,
    onFinish: ViewOnFinishCallback
  ): void {
    this.thumbs.addMouseListener((thumbShift: number, index: number) => {
      const percent = this.percentFromThumbShift(thumbShift);
      handler(percent, index);
    }, onFinish);

    this.scale.clickEvent((clickCoords: number, evt: PointerEvent) => {
      this.clickHandler(clickCoords, handler, evt, onFinish);
    });
  }

  public clickHandler(
    clickCoords: number,
    handler: ViewChangeHandler,
    evt: PointerEvent,
    onFinish: ViewOnFinishCallback
  ): void {
    const percent = this.percentFromThumbShift(clickCoords);
    const requiredThumb: RequiredThumb = this.thumbs.requiredThumb(clickCoords);
    handler(percent, requiredThumb.index);

    this.thumbs.mouseMoveEvent(
      requiredThumb.root,
      evt,
      (thumbShift: number) => {
        const percent = this.percentFromThumbShift(thumbShift);
        handler(percent, requiredThumb.index);
      },
      onFinish
    );
  }

  public getThumbSize(): number {
    return this.thumbs.getThumbSize();
  }

  private percentFromThumbShift(thumbShift: number): number {
    const railSize = this.size;
    const distanceFromRailToScreen = this.distanceToScreen;
    let percent = (thumbShift - distanceFromRailToScreen) / railSize;
    if (percent <= 0) {
      percent = 0;
    }
    if (percent >= 1) {
      percent = 1;
    }
    return percent;
  }
}

export default Rail;
