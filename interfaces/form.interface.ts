import {ReactElement} from "react";

export interface IForm {
  fieldsLabels: string[];
  buttonLabel: string;
  formBlack?: boolean;
  isUploadFiles?: boolean;
  uploadFilesLabel?: ReactElement;
}
