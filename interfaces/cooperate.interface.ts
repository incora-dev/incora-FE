export interface IPlus {
  plusesColor: string;
  animation?: boolean;
  animationDelay?: number;
}

export interface IDot {
  color: string;
  numberOfDots?: number;
  animation?: boolean;
  animationDelay?: number;
}

export interface IDots {
  numberOfDots: number;
  dotColor: string;
  animation?: boolean;
}

export interface INumberOfSlides {
  currentNumber: number;
  numberOfSlides: number;
}

export interface ISliders {
  sliders: ISliderInfo[];
  plusesColor: string;
  setSlide: Function;
  setBeforePageScroll: Function;
}

export interface ISliderInfo {
  title: string;
  mainTitle: string;
  text: string;
  redirectTo: string;
  buttonLabel?: string;
}

export interface IElement {
  elementNumber: number;
  plusesColor: string;
  animation: boolean;
}

export interface IElementAnimation {
  animation: boolean;
}
