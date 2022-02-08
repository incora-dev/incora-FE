import {
  Div,
  Wrapper,
  InfoBlock,
  H2,
  ArgumentsBlock,
  TechnologyWrapper,
  H3,
  Text,
} from "./WhyShouldUseTechnology.style";
import { firstLetterBig } from "../../../utils";
import { GetTechnologyPage_technology_data_attributes_whyShouldYouUse_items } from "../../../graphql/technologies/__generated__/GetTechnologyPage";

interface IWhyShouldUseTechnology {
  title: string;
  bgColor: string;
  titleColor: string;
  items: (GetTechnologyPage_technology_data_attributes_whyShouldYouUse_items | null)[];
}

interface IGetArguments {
  items: (GetTechnologyPage_technology_data_attributes_whyShouldYouUse_items | null)[];
}

const GetArguments = ({ items }: IGetArguments) => {
  const createArgument = items.map((item) => {
    const id = item?.id;
    const title = item?.title;
    const description = item?.description;

    return (
      <TechnologyWrapper key={id}>
        <H3>{title}</H3>
        <Text>{description}</Text>
      </TechnologyWrapper>
    );
  });

  return <>{createArgument}</>;
};

const WhyShouldUseTechnology = ({
  title,
  bgColor,
  titleColor,
  items,
}: IWhyShouldUseTechnology) => {
  return (
    <Div bgColor={bgColor}>
      <Wrapper>
        <InfoBlock>
          <H2 color={titleColor}>{title}</H2>
          <ArgumentsBlock>
            <GetArguments items={items} />
          </ArgumentsBlock>
        </InfoBlock>
      </Wrapper>
    </Div>
  );
};

export default WhyShouldUseTechnology;