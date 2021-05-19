import SliderElement from './SliderElement';
import { Settings, TrackHandler } from '../../types';

class TrackView extends SliderElement {
  constructor(rootNode: HTMLElement, state: Settings) {
    super(rootNode, ['free-slider__track'], state.orientation);
  }

  // Слушатель для обработки клика по треку
  public clickEvent(handler: TrackHandler): void {
    this.root.addEventListener(
      'pointerdown',
      this.handleTrackPointerDown.bind(this, handler)
    );
  }

  private handleTrackPointerDown(
    handler: TrackHandler,
    evt: PointerEvent
  ): void {
    evt.preventDefault();
    handler(evt[this.coordsType], evt);
  }
}

export default TrackView;
