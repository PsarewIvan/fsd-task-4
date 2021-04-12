import Slider from './../includes/slider/Slider';
import { Settings } from './../../types';
import './../../styles/global.scss';
import './index.scss';
import '../../../src';

(() => {
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

  const sliders: NodeListOf<HTMLDivElement> = document.querySelectorAll(
    '.js-main__slider'
  );

  sliders.forEach((slider, i) => {
    new Slider(slider, slidersOptions[i]);
  });
})();
