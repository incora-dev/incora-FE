import {
  Div,
  Wrapper,
  H2,
  H3,
  Content,
  ContentWrapper,
  Text,
  Number,
  Title,
  TitleContent,
} from "./WorkflowSetUp.style";
import { firstLetterBig } from "../../../utils";
import IconWorkflow1 from "../../../public/SVG/workflowSetUp/01workflowIcon.svg";
import IconWorkflow2 from "../../../public/SVG/workflowSetUp/02workflowIcon.svg";
import IconWorkflow3 from "../../../public/SVG/workflowSetUp/03workflowIcon.svg";
import IconWorkflow4 from "../../../public/SVG/workflowSetUp/04workflowIcon.svg";
import { GetService_service_data_attributes_workflow_items } from "../../../graphql/services/__generated__/GetService";
import { IMAGES_LINK } from "../../../constants";
import Image from "next/image";

interface IWorkflowSetUp {
  title: string;
  content: (GetService_service_data_attributes_workflow_items | null)[];
}

interface IGetContent {
  content: (GetService_service_data_attributes_workflow_items | null)[];
}

const GetContent = ({ content }: IGetContent) => {
  const createContent = content.map((item, index) => {
    const id = item?.id;
    const title = item?.title;
    const description = item?.description;
    const icon = item?.image?.data?.attributes;
    const src = IMAGES_LINK + icon?.url;
    const width = icon?.width;
    const height = icon?.height;

    const numberTitle = index < 10 ? `0${index + 1}.` : `${index + 1}.`;

    return (
      <>
        {width && height && (
          <ContentWrapper key={id}>
            <Title>
              <Image
                loader={() => src}
                src={src}
                width={width}
                height={height}
                alt="icon"
              />
              <TitleContent>
                <Number>{numberTitle}</Number>
                <H3>{title}</H3>
              </TitleContent>
            </Title>
            <Text>{description}</Text>
          </ContentWrapper>
        )}
      </>
    );
  });

  return <>{createContent}</>;
};

const WorkflowSetUp = ({ title, content }: IWorkflowSetUp) => {
  const titleFirstLetterBig = firstLetterBig(title);

  return (
    <Div>
      <Wrapper>
        <H2>{titleFirstLetterBig}</H2>
      </Wrapper>

      <Content>
        <GetContent content={content} />
      </Content>
    </Div>
  );
};

export default WorkflowSetUp;
