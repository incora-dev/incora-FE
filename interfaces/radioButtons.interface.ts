import { IStacks } from "./servicesComponent.interface";

export interface IRadioButtons {
  labels: IStacks[];
  currentIndex: number;
  onChange: Function;
  bgColor: string;
  border: string;
  textColor: string;
  padding: string;
  columnGap?: string;
  rowGap?: string;
}
