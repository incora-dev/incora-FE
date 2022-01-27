export interface ISlide {
  id: number;
  image: HTMLImageElement;
  title: string;
};

export interface HorizontalSliderProps {
  slides: ISlide[];
};