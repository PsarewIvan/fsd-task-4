import SliderElement from './components/view/SliderElement';

export interface Settings {
  min: number;
  max: number;
  step: number;
  values?: Array<number>;
  percents?: Array<number>;
  type?: SliderType;
  orientation?: SliderOrientation;
  scale?: boolean;
  scaleMark: number;
  subScaleMark: number;
  tooltips?: boolean;
  hints?: boolean;
  onChange?: (value: Array<number>) => void;
  onFinish?: (value: Array<number>) => void;
  onUpdate?: (value: Array<number>) => void;
}

export interface Methods {
  init: (options?: Partial<Settings>) => JQuery;
  update: (state: Partial<Settings>) => void;
  getState: () => Settings;
  onChange: (handler: Function) => void;
  onLoad: (handler: Function) => void;
}

export interface RequiredThumb {
  index: number;
  root: SliderElement;
}

export type ThumbType = 'single' | 'from' | 'to';
export type SliderType = 'single' | 'range';
export type SliderOrientation = 'vertical' | 'horizontal';
export type DirectionType = 'left' | 'top';
export type OffsetSizeType = 'offsetWidth' | 'offsetHeight';
export type SizeType = 'width' | 'height';
export type CoordType = 'clientX' | 'clientY';

declare global {
  interface JQuery {
    freeSlider: (
      options?: Partial<Settings> | string,
      arg?: Partial<Settings> | Function
    ) => JQuery | Array<number> | Settings | void;
  }
}
