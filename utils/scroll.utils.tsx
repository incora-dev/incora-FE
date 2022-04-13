interface IAnimateScroll {
  targetPosition: number;
  initialPosition: number;
  duration: number;
}

interface IScrollTo {
  id?: string;
  ref?: any;
  duration?: number;
}

const pow = Math.pow;

// The easing function that makes the scroll decelerate over time
const easeOutQuart = (x: number) => {
  return 1 - pow(1 - x, 4);
};

const animateScroll = ({
  targetPosition,
  initialPosition,
  duration,
}: IAnimateScroll) => {
  let start: number;
  let position: number;
  let animationFrame: any;

  const requestAnimationFrame = window.requestAnimationFrame;
  const cancelAnimationFrame = window.cancelAnimationFrame;

  // maximum amount of pixels we can scroll
  const maxAvailableScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const amountOfPixelsToScroll = initialPosition - targetPosition;

  const step = (timestamp: number) => {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    // this just gives us a number between 0 (start) and 1 (end)
    const relativeProgress = elapsed / duration;

    // ease out that number
    const easedProgress = easeOutQuart(relativeProgress);

    // calculate new position for every thick of the requesAnimationFrame
    position =
      initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);

    // set the scrollbar position
    window.scrollTo(0, position);

    // Stop when max scroll is reached
    if (
      initialPosition !== maxAvailableScroll &&
      window.scrollY === maxAvailableScroll
    ) {
      cancelAnimationFrame(animationFrame);
      return;
    }

    // repeat until the end is reached
    if (elapsed < duration) {
      animationFrame = requestAnimationFrame(step);
    }
  };

  animationFrame = requestAnimationFrame(step);
};

// const getElementPosition = (element: any) => element.offsetTop;

const getElementPosition = (el: any) => {
  let _x = 0;
  let _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
};

let shouldScroll = true;

export const scrollTo = ({ id, ref = null, duration = 300 }: IScrollTo) => {
  if (!shouldScroll) return;

  shouldScroll = false;
  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;

  // decide what type of reference that is
  // if neither ref or id is provided  set element to null
  const element = ref ? ref.current : id ? document.getElementById(id) : null;

  if (!element) {
    // log error if the reference passed is invalid
    console.log("error");
    shouldScroll = true;
    return;
  }

  setTimeout(() => {
    shouldScroll = true;
  }, 800);

  animateScroll({
    targetPosition: getElementPosition(element).top - 104,
    initialPosition,
    duration,
  });
};
