export interface IService {
  title: string;
  text: string;
  icon: JSX.IntrinsicElements;
  content: IServiceContent[];
  bestSuitedFor: IBestSuitedFor;
  workflowSetUp: IWorkflowSetUp;
}

export interface IServiceCTX {
  query: IServiceQuery;
}

export interface IServiceQuery{
  service: string;
}

export interface IHeaderService {
  title: string;
  titleSize?: string;
  text: string;
  label?: string;
  textWidth: string;
  bgColor?: string;
  hexagonColor?: string;
}

export interface IServiceContents {
  content: IServiceContent[];
}

export interface IServiceContent {
  title: string;
  text: string;
}

export interface IBestSuitedFor {
  title: string;
  info: string[];
}

export interface IWorkflowSetUp {
  title: string;
  content: IWorkflowSetUpContent[];
}

export interface IWorkflowSetUpContent {
  title: string;
  text: string
}
