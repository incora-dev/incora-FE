import {
  Div,
  H1,
  Wrapper,
  Text,
  Content,
  ContentWrapper,
  PositionDots
} from "./BestSuitedFor.style";
import { IBestSuitedFor } from "@interfaces";
import Loader from "../../../public/loading1.svg"
import { firstLetterBig } from "../../../utils";
import Dots from "../../Homepage/Cooperate/elements/dots/dots";
import { theme } from "../../../styles/theme";
import { useState } from "react";

const getContent = (labels: string[], onBlockEnter = false) => {
  return labels.map((label, index) => {
        return (
          // onBlockEnter &&
            <ContentWrapper
              key={index}
              animation={onBlockEnter}
              delay={index * 200}
            >
              <PositionDots>
                <Dots
                  numberOfDots={5}
                  dotColor={theme.colors.white}
                  animation={onBlockEnter}
                  rowGap={'7px'}
                />
              </PositionDots>
                <>
                  <Loader width="87" height="87" viewBox="0 0 96 96"/>
                  <Text>{label}</Text>
                </>
            </ContentWrapper>
        )
      }

  )
};

const BestSuitedFor = ({title, info}: IBestSuitedFor) => {
  const [onBlock, setOnBlock] = useState(false);
  const content = getContent(info, onBlock);
  const titleFirstLetterBig = firstLetterBig(title);

  return (
    <Div onMouseEnter={() => setOnBlock(true)}>
      <Wrapper>
        <H1>{titleFirstLetterBig}</H1>
        <Content>{content}</Content>
      </Wrapper>
    </Div>
  )
}

export default BestSuitedFor;
