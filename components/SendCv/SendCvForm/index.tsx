import { theme } from "../../../styles/theme";
import AttachCv from "../../Vacancy/AttachCV";
import { AttachCvWrap, ContentWrap, SendCvFormWrapper } from "./style";

const SendCvForm = () => {
  return (
    <SendCvFormWrapper>
      <ContentWrap>
        <AttachCvWrap>
          <AttachCv big formBlack />
        </AttachCvWrap>
      </ContentWrap>
    </SendCvFormWrapper>
  );
};

export default SendCvForm;
