import {
  Div,
  Wrapper,
  H1,
  H2,
  Content,
  ContentWrapper,
  Text,
  Number,
  Title
} from "./WorkflowSetUp.style";
import { IWorkflowSetUp, IWorkflowSetUpContent } from "@interfaces";
import { firstLetterBig } from "../../../utils";
import IconWorkflow1 from "../../../public/SVG/workflowSetUp/01workflowIcon.svg"
import IconWorkflow2 from "../../../public/SVG/workflowSetUp/02workflowIcon.svg"
import IconWorkflow3 from "../../../public/SVG/workflowSetUp/03workflowIcon.svg"
import IconWorkflow4 from "../../../public/SVG/workflowSetUp/04workflowIcon.svg"

const getIcon = (index: number) => {
  const icons = [IconWorkflow1, IconWorkflow2, IconWorkflow3, IconWorkflow4]
  const icon = (number: number) => {
    if (number > icons.length - 1) {
      return icons[Math.ceil(number / icons.length - 1)];
    }

    return icons[number];
  };

  return icon(index);
}

const getContent = (content: IWorkflowSetUpContent[] = []) => {
  return content.map(({ title, text }, index) => {
    const numberTitle = index < 10 ? `0${index + 1}.` : `${index + 1}.`;
    const Icon = getIcon(index);

    return (
      <ContentWrapper key={index}>
        <Icon/>
        <Title>
          <Number>{numberTitle}</Number>
          <H2>{title}</H2>
        </Title>
        <Text>{text}</Text>
      </ContentWrapper>
    )
  })
}

const WorkflowSetUp = ({ title, content }: IWorkflowSetUp) => {
  const titleFirstLetterBig = firstLetterBig(title);
  const contents = getContent(content);

  return (
    <Div>
      <Wrapper>
        <H1>{titleFirstLetterBig}</H1>
      </Wrapper>


      <Content>
        {contents}
      </Content>
    </Div>
  )
}

export default WorkflowSetUp;
