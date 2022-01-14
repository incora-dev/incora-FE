export interface ITechnologies {
  bgColor?: string;
  title: string;
  labels: ITechnologiesInfo[];
  articles?: Object[];
}

export interface IBlockTechnologies {
  technologies: ITechnologiesInfo[];
}

export interface ITechnologiesInfo {
  technology: ITechnology;
}

export interface ITechnology {
  label: string;
  text: string[];
  icons: JSX.Element[];
}

export interface ITechnologyContainer {
  index: number;
}
