import { ReactElement } from "react";

export interface IForm {
  buttonLabel: string;
  dropListLabels?: string[];
  linkedIn?: boolean;
  dropList?: boolean;
  formBlack?: boolean;
  isUploadFiles?: boolean;
  uploadFilesLabel?: ReactElement;
  selectedFiles?: File | File[] | null;
}
