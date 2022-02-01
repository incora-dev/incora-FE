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
  GetTechnologyPage_technologies_data_attributes_whyDevelopWithUs,
  GetTechnologyPage_technologies_data_attributes_whyDevelopWithUs_items,
} from "../../../graphql/technologies/__generated__/GetTechnologyPage";

interface IWhyDevelopWithUs {
  data: GetTechnologyPage_technologies_data_attributes_whyDevelopWithUs;
}

interface IReasons {
  items: (GetTechnologyPage_technologies_data_attributes_whyDevelopWithUs_items | null)[];
}

const Reasons = ({ items }: IReasons) => {
  const createReasons = items.map((item, index) => {
    const id = item?.id;
    const title = item?.title;
    const description = item?.description;

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

const WhyDevelopWithUs = ({ data }: IWhyDevelopWithUs) => {
  const { items, connections } = data;

  const connectionTextOne = connections && connections[0]?.text;
  const connectionTextTwo = connections && connections[1]?.text;

  return (
    <>
      {items && (
        <Div>
          <Wrapper>
            <TextBlock>
              <H2>{"Why develop with us?"}</H2>
              <ReasonsWrapper>
                <Reasons items={items} />f
                <PositionPointsLarge>
                  <PointsLarge />
                </PositionPointsLarge>
                <PositionPointsSmall>
                  <PointsSmall />
                </PositionPointsSmall>
                <PositionTextRotated1>
                  <TextRotated>{connectionTextOne}</TextRotated>
                </PositionTextRotated1>
                <PositionTextRotated2>
                  <TextRotated>{connectionTextTwo}</TextRotated>
                </PositionTextRotated2>
              </ReasonsWrapper>
            </TextBlock>
          </Wrapper>
        </Div>
      )}
    </>
  );
};

export default WhyDevelopWithUs;