import {ReactElement} from "react";

export interface IForm {
  dropListLabels?: string[];
  buttonLabel?: string;
  linkedIn?: boolean;
  dropList?: boolean;
  formBlack?: boolean;
  isUploadFiles?: boolean;
  uploadFilesLabel?: ReactElement;
  selectedFiles?: File | File[] | null;
}
