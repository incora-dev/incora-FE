export interface IInformationComponent {
  slide: IInfoBlock;
}

export interface IInfoBlock {
  id: string;
  title: string;
  text: string;
  estimated_time: IEstimatedTime[];
  outcomes: IOutcomes[];
  estimated_time_icon: SVGAElement;
  outcomes_icon: SVGAElement;
}

export interface IEstimatedTime {
  title: string;
  text: string;
  icon: string;
}

export interface IOutcomes{
  title: string;
  text: string;
  icon: string;
}

export interface ITechStack{
  stackTitle: string;
  stacks: IStacks[];
}

export interface IStacks{
  title: string;
  text?: string;
  stacks?: string[];
  stacksLogo?: JSX.Element[];
  id?: string;
}
