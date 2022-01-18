import { IStacks } from "./servicesComponent.interface";

export interface IRadioButtons {
  labels: IStacks[];
  currentIndex: number;
  onChange?: Function;
  preventChange?: boolean;
  bgColor: string;
  border: string;
  textColor: string;
  padding: string;
  fontWeight?: string;
  flexDirection?: string;
  columnGap?: string;
  rowGap?: string;
  isHover?: boolean;
  cursor?: string;
}
