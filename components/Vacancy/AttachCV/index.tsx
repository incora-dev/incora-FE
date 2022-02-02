import { IContactUs } from "../../../interfaces/contactUs.interface";
import FormClassic from "../../FormClassic";
import { AttachCvWrapper, DragAndDropBox } from "./style";
import FilesUploader from "../../FormClassic/FilesUploader";
import { ReactElement, useState } from "react";

const contactUs: IContactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "Join Us",
};

interface AttachCv {
  uploaderLabel: ReactElement;
  big?: boolean;
  formBlack?: boolean;
  uploaderPadding?: string;
  uploaderHeight?: string;
}

const AttachCv = ({ uploaderLabel, big, formBlack = false, uploaderPadding = '15px 30px', uploaderHeight = '103px'}: AttachCv) => {
  const [inputSelectedFile, setSelectedFile] = useState<File | File[] | null>(null);

  return (
    <AttachCvWrapper big={big}>
      <h3 className="attach">{"1. Attach Your CV"}</h3>

      <FilesUploader
          inputHeight={uploaderHeight}
          padding={uploaderPadding}
          filesLabel={uploaderLabel}
          formTheme={formBlack}
          setSelectedFile={setSelectedFile}
      />

      <h3 className="personal">{"2. Personal information"}</h3>
      <FormClassic
          selectedFiles={inputSelectedFile}
          buttonLabel={contactUs.buttonLabel}
          formBlack={formBlack}
      />
    </AttachCvWrapper>
  );
};

export default AttachCv;
