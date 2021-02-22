import Scale from '../src/components/view/Scale';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

function pointerEvent(node, eventType) {
  // Почему-то PointerEvent не определяется
  const event = new MouseEvent(eventType, {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 500,
    clientY: 300,
  });
  node.dispatchEvent(event);
}
const scaleWidth = 90;
let scale;

describe('Check horizontal', () => {
  const state = {
    max: 500,
    min: 300,
    markNumber: 10,
    subMarkNumber: 5,
    orientation: 'horizontal',
  };

  beforeEach(() => {
    scale = new Scale(document.body, scaleWidth, state);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('Render scale', () => {
    expect(scale.root).toBeInTheDocument();
  });

  it('Scale class must be a "free-slider__scale"', () => {
    expect(scale.root.classList.contains('free-slider__scale')).toBeTruthy();
  });

  it('The total number of mark must be 51', () => {
    const markNumber = document.querySelectorAll('.free-slider__scale-mark')
      .length;
    expect(markNumber).toBe(51);
  });

  it('The total number of big mark must be 11', () => {
    const markNumber = document.querySelectorAll(
      '.free-slider__scale-mark--big'
    ).length;
    expect(markNumber).toBe(11);
  });

  it('The first mark style left must be 0%', () => {
    const styleLeft = document.querySelectorAll('.free-slider__scale-mark')[0]
      .style.left;
    expect(styleLeft).toBe('0%');
  });

  it('The last mark style left must be 100%', () => {
    const marks = document.querySelectorAll('.free-slider__scale-mark');
    const styleLeft = marks[0].style.left;
    expect(styleLeft).toBe('0%');
  });

  it('The first mark style left must be 0%', () => {
    const marks = document.querySelectorAll('.free-slider__scale-mark');
    const styleLeft = marks[marks.length - 1].style.left;
    expect(styleLeft).toBe('100%');
  });

  it('The second mark style left must be 2%', () => {
    const marks = document.querySelectorAll('.free-slider__scale-mark');
    const styleLeft = marks[1].style.left;
    expect(styleLeft).toBe('2%');
  });

  it('The first big mark style left must be 0%', () => {
    const bigMarks = document.querySelectorAll('.free-slider__scale-mark--big');
    const styleLeft = bigMarks[0].style.left;
    expect(styleLeft).toBe('0%');
  });

  it('The last big mark style left must be 100%', () => {
    const bigMarks = document.querySelectorAll('.free-slider__scale-mark--big');
    const styleLeft = bigMarks[bigMarks.length - 1].style.left;
    expect(styleLeft).toBe('100%');
  });

  it('The second big mark style left must be 10%', () => {
    const bigMarks = document.querySelectorAll('.free-slider__scale-mark--big');
    const styleLeft = bigMarks[1].style.left;
    expect(styleLeft).toBe('10%');
  });

  it('The number of text-mark should be be to the number of big-mark', () => {
    const textMarks = document.querySelectorAll('.free-slider__scale-text');
    const bigMarks = document.querySelectorAll('.free-slider__scale-mark--big');
    expect(textMarks.length === bigMarks.length).toBeTruthy();
  });

  it('The text on the first mark must be min value', () => {
    const textMarks = document.querySelectorAll('.free-slider__scale-text');
    expect(textMarks[0].innerHTML).toBe('300');
  });

  it('The text on the last mark must be max value', () => {
    const textMarks = document.querySelectorAll('.free-slider__scale-text');
    expect(textMarks[textMarks.length - 1].innerHTML).toBe('500');
  });

  it('The text on the second mark must be 320', () => {
    const textMarks = document.querySelectorAll('.free-slider__scale-text');
    expect(textMarks[1].innerHTML).toBe('320');
  });

  it('Click on scale must be call handler with clientX values on horizontal', () => {
    let values;
    const handler = jest.fn((clientX) => {
      values = clientX;
    });
    scale.clickEvent(handler);
    pointerEvent(scale.root, 'pointerdown');
    expect(values).toBe(500);
  });

  it('Click on scale must be call handler with clientY values on vertical', () => {
    scale.state.orientation = 'vertical';
    let values;
    const handler = jest.fn((clientY) => {
      values = clientY;
    });
    scale.clickEvent(handler);
    pointerEvent(scale.root, 'pointerdown');
    expect(values).toBe(300);
  });
});

describe('Check vertical', () => {});
