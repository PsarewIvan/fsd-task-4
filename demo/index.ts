import $ from 'jquery';
// import Slider from './pug/includes/slider/Slider';
import './styles/global.scss';
import './pug/pages/index.scss';
import '../src';

const slidersOptions: Partial<Settings>[] = [
  {
    min: 300,
    max: 500,
    values: [400],
    step: 0.1,
    scale: true,
    scaleMark: 10,
    subScaleMark: 5,
  },
  {
    type: 'range',
    min: -100,
    max: 300,
    values: [30, 100],
    step: 10,
    scale: true,
  },
  {
    orientation: 'vertical',
    min: 0,
    max: 100,
    values: [30],
    step: 1,
    scale: true,
    hints: false,
    tooltips: false,
  },
  {
    orientation: 'vertical',
    type: 'range',
    min: -100,
    max: 100,
    values: [0, 50],
    step: 5,
  },
];

$('.js-slider').each(function (index) {
  $(this).freeSlider(slidersOptions[index]);
});

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
