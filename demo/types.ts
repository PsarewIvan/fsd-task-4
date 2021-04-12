interface Settings {
  min: number;
  max: number;
  step: number;
  values: Array<number>;
  percents: Array<number>;
  type: 'single' | 'range';
  orientation: 'horizontal' | 'vertical';
  scale: boolean;
  scaleMark: number;
  subScaleMark: number;
  tooltips: boolean;
  hints: boolean;
  onChange: (value: Array<number>) => void;
  onFinish: (value: Array<number>) => void;
  onUpdate: (value: Array<number>) => void;
}

interface InputElementState {
  wrapper: HTMLDivElement;
  type: string;
  classMod: string;
  labelText: string;
  name?: string;
  value?: string;
}

export { Settings, InputElementState };