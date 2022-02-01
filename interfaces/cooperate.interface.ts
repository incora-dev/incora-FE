export interface IPlus {
  plusesColor: string;
  animation: boolean;
  animationDelay?: number;
}

export interface IDot {
  color: string;
  numberOfDots?: number;
  animation?: boolean;
  animationDelay?: number;
  size?: string;
}

export interface IDots {
  numberOfDots: number;
  dotColor: string;
  animation?: boolean;
  size?: string;
  columnGap?: string;
  rowGap?: string;
}

export interface INumberOfSlides {
  currentNumber: number;
  numberOfSlides: number;
}

export interface ISliders {
  slide: ISliderInfo;
  index: number;
  plusesColor: string;
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
