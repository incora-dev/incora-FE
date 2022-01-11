export interface IPlus {
  plusesColor: string;
}

export interface IDot {
  color: string;
  numberOfDots?: number;
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
}
