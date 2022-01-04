export interface IEmbodiedIdeas {
  title: string;
  bgColor: string;
  projects: IProject[];
  elementsColor: string;
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
}

export interface IPictureWithAnimation {
  img: string;
  index: number;
  elementsColor: string;
}

export interface IAnimation {
  index: number;
  elementsColor: string;
}
