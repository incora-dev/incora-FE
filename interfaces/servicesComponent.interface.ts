export interface IInformationComponent {
  bgColor: string;
  info: any;
}

export interface IInfoBlock {
  title: string;
  text: string;
  estimated_time: IEstimatedTime[];
  outcomes: IOutcomes[];
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
  text: string;
  stacks: string[];
  stacksLogo: JSX.Element[];
}
