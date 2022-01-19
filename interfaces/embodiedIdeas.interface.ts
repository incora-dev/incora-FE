export interface IEmbodiedIdeas {
  title?: string;
  bgColor: string;
  projects: IProject[];
  elementsColor: string;
  height?: number;
  disablePadding?: boolean;
  disableSeeMore?: boolean;
}

export interface IProjects {
  projects: IProject[];
  elementsColor: string;
}

export interface IProject {
  title: string;
  text: string;
  technologies: string[];
  img: string;
}

export interface IProjectTechnologies {
  technologies: string[];
  textTagsColor?: string;
  bgTagsColor?: string;
}

export interface IPictureWithAnimation {
  img: string;
  index: number;
  elementsColor: string;
  shouldHover: number;
  setShouldHover: Function;
}

export interface IAnimation {
  index: number;
  elementsColor: string;
  shouldHover: number;
}
