import {Div, H1, Wrapper, Text, Content, ContentWrapper} from "./BestSuitedFor.style";
import { IBestSuitedFor } from "@interfaces";
import Loader from "../../../public/loading1.svg"
import {firstLetterBig} from "../../../utils";

const getContent = (labels: string[]) => {
  return labels.map((label, index) =>
      <ContentWrapper key={index}>
        <Loader width="87" height="87" viewBox="0 0 96 96"/>
        <Text>{label}</Text>
      </ContentWrapper>
  )
}

const BestSuitedFor = ({title, info}: IBestSuitedFor) => {
  const content = getContent(info);
  const titleFirstLetterBig = firstLetterBig(title);

  return (
    <Div>
      <Wrapper>
        <H1>{titleFirstLetterBig}</H1>
        <Content>{content}</Content>
      </Wrapper>
    </Div>
  )
}

export default BestSuitedFor;
