import {
  Div,
  Wrapper,
  TextBlock,
} from "./MainInfo.style";
import React from "react";

interface IMainInfo {
  PrivacyPolicyText: any;
}

const MainInfo = ({ PrivacyPolicyText }: IMainInfo) => {
  return (
    <Div>
      <Wrapper>
        <TextBlock>
          <PrivacyPolicyText/>
        </TextBlock>
      </Wrapper>
    </Div>
  )
}

export default MainInfo;
