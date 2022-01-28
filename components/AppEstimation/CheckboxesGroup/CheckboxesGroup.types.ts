export interface IPlatform {
  id: number;
  name: string;
  min: number;
  max: number;
};

export interface ICheckbox {
  id: number;
  name: string;
  platforms: IPlatform[];
};

export interface ICheckboxesGroup {
  name: string;
  features: ICheckbox[];
};
