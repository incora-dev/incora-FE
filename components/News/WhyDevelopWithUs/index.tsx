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
import { firstLetterBig } from "../../../utils";
import PointsLarge from "../../../public/SVG/expertise/pointsLarge.svg";
import PointsSmall from "../../../public/SVG/expertise/pointsSmall.svg";

interface IWhyDevelopWithUs {
  title: string;
  info: IInfo[];
}

interface IInfo {
  title: string;
  text: string;
}

const getReasons = (reasons: IInfo[]) => {
  return (
    reasons.map(({ title, text }, index) => {
      const isLastChild = (reasons.length - 1) === index;

      return (
        <BlockReason key={index + 40000} isLastChild={isLastChild}>
          <H3>{title}</H3>
          <Text>{text}</Text>
          <PositionNumberBlock>
            <NumberBlock>
              <Circle/>
              <Number>0{index + 1}</Number>
            </NumberBlock>
          </PositionNumberBlock>
        </BlockReason>
      )
    })
  )
}

const WhyDevelopWithUs = ({ title, info }: IWhyDevelopWithUs) => {
  const reasons = getReasons(info);

  return (
    <Div>
      <Wrapper>
        <TextBlock>
          <H2>
            {firstLetterBig(title)}
          </H2>
          <ReasonsWrapper>
            {reasons}
            <PositionPointsLarge>
              <PointsLarge/>
            </PositionPointsLarge>

            <PositionPointsSmall>
              <PointsSmall/>
            </PositionPointsSmall>

            <PositionTextRotated1>
              <TextRotated>Thorough supervision</TextRotated>
            </PositionTextRotated1>

            <PositionTextRotated2>
              <TextRotated>custom solution developmet</TextRotated>
            </PositionTextRotated2>
          </ReasonsWrapper>
        </TextBlock>
      </Wrapper>
    </Div>
  )
}

export default WhyDevelopWithUs;
