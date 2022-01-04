export interface ITechnologies {
  bgColor: string;
  title: string;
  labels: object[];
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
}
