import { SendCvHeaderWrapper, TextWrap } from "./style";

const SendCvHeader = () => {
  return (
    <SendCvHeaderWrapper>
      <TextWrap>
        <h1>{"Send your CV."}</h1>
        <h1>{"We'll get back to you soon."}</h1>
      </TextWrap>
    </SendCvHeaderWrapper>
  );
};

export default SendCvHeader;
