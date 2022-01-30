import { GetServicesPage_servicesPage_data_attributes_services_data } from "../graphql/services/__generated__/GetServicesPage";
import { IStacks } from "./servicesComponent.interface";

export interface IRadioButtons {
  labels: GetServicesPage_servicesPage_data_attributes_services_data[];
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
