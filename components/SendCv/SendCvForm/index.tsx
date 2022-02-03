import { theme } from "../../../styles/theme";
import AttachCv from "../../Vacancy/AttachCV";
import { AttachCvWrap, ContentWrap, SendCvFormWrapper } from "./style";

const filesUploaderLabel = () =>
    <>
      <div><span>Upload a file</span> or drag and drop here</div>
      <p>We accept PDF, DOC, DOCX, JPG and PNG files.</p>
    </>

const SendCvForm = () => {
  return (
    <SendCvFormWrapper>
      <ContentWrap>
        <AttachCvWrap>
          <AttachCv
            uploaderHeight={'136px'}
            uploaderLabel={filesUploaderLabel()}
            big
            formBlack
          />
        </AttachCvWrap>
      </ContentWrap>
    </SendCvFormWrapper>
  );
};

export default SendCvForm;
