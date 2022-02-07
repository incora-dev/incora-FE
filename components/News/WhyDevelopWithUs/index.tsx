import {
  Div,
  Wrapper,
  TextBlock,
  H2,
  H3,
  BlockReason,
  ReasonsWrapper,
  Text,
  PositionNumberBlock,
  NumberBlock,
  Circle,
  Number,
  PositionPointsLarge,
  PositionPointsSmall,
  PositionTextRotated1,
  PositionTextRotated2,
  TextRotated,
} from "./WhyDevelopWithUs.style";
import PointsLarge from "../../../public/SVG/expertise/pointsLarge.svg";
import PointsSmall from "../../../public/SVG/expertise/pointsSmall.svg";
import {
  GetTechnologyPage_technology_data_attributes_whyDevelopWithUs,
  GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items,
} from "../../../graphql/technologies/__generated__/GetTechnologyPage";

interface IWhyDevelopWithUs {
  data: GetTechnologyPage_technology_data_attributes_whyDevelopWithUs;
}

interface IReasons {
  items: (GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items | null)[];
}

interface IReasonsDataItems {
  items: IData[];
}

interface IData {
  id: string;
  title: string;
  description: string;
}

function Reasons({ items }: IReasonsDataItems) {
  const createReasons = items.map(({ id, title, description }: IData, index) => {
    const isLastChild = items.length - 1 === index;

    return (
      <BlockReason key={id} isLastChild={isLastChild}>
        <H3>{title}</H3>
        <Text>{description}</Text>
        <PositionNumberBlock>
          <NumberBlock>
            <Circle />
            <Number>0{index + 1}</Number>
          </NumberBlock>
        </PositionNumberBlock>
      </BlockReason>
    );
  });

  return <>{createReasons}</>;
};

const WhyDevelopWithUs = ({ items }: IReasonsDataItems) => {
  const connectionTextOne = 'Thorough supervision';
  const connectionTextTwo = 'Custom solution development';

  return (
    <>
      <Div>
        <Wrapper>
          <TextBlock>
            <H2>{"Why develop with us?"}</H2>
            <ReasonsWrapper>
              <Reasons items={items} />
              <PositionPointsLarge>
                <PointsLarge />
              </PositionPointsLarge>
              <PositionPointsSmall>
                <PointsSmall />
              </PositionPointsSmall>
              <PositionTextRotated1>
                <TextRotated>{ connectionTextOne }</TextRotated>
              </PositionTextRotated1>
              <PositionTextRotated2>
                <TextRotated>{ connectionTextTwo }</TextRotated>
              </PositionTextRotated2>
            </ReasonsWrapper>
          </TextBlock>
        </Wrapper>
      </Div>
    </>
  );
};

export default WhyDevelopWithUs;
