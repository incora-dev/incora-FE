import {
  Container,
  Div,
  MenuBlock,
  MenuLabel,
  TextBlock,
  P,
  H2,
  H3,
  EstimatedTimeAndOutcomesBlock,
  Text,
  Package,
  Block,
  PositionButtonWithArrow,
  CircleBlock,
  Circle,
  PositionText,
  PositionCircleBlock
} from "./Information.style";
import { IInformationComponent } from "@interfaces";
import React from "react"
import { useState } from "react";
import OutcomesIcon from "../../../public/SVG/estimatedTimeIco.svg"
import EstimatedTimeIcon from "../../../public/SVG/OutcomesLogo.svg"
import TextAroundCircle from "../../../public/SVG/aroundTheCircle.svg"
import ButtonWithArrow from "../../ButtonWithArrow";

const InformationComponent = ({ bgColor, info  }: IInformationComponent) => {
  const [color, setColor] = useState(bgColor);
  const [information, setInformation] = useState([info[0]]);

  const onClick = (index: number, ...data: any) => {
    setColor('#FEC602;');
    setInformation(data);
  }

  const getBlockMenuLabels = () => {
    return info.map(({ title, text, outcomes , estimated_time }: any, index: number ) =>
      <MenuLabel
        key={index}
        onClick={() => onClick(index, { title, text, outcomes, estimated_time })}
        bgColor={color}
      >
        {title}
      </MenuLabel>
    )
  }

  const getEstimatedTimeInfo = () => {
    const title = information[0].estimated_time.find(({title}: any ) => title);
    const text = information[0].estimated_time.find(({text}: any) => text);

    return (
      <Block>
        <EstimatedTimeIcon/>
        <Package>
          <H3>{title?.title}</H3>
          <Text>{text?.text}</Text>
        </Package>
      </Block>
    )
  }

  const getOutcomesInfo = () => {
    const title = information[0].outcomes.find(({title}: any) => title);
    const text = information[0].outcomes.find(({text}: any) => text);

    return (
        <Block>
          <OutcomesIcon/>
          <Package>
            <H3>{title?.title}</H3>
            <Text>{text?.text}</Text>
          </Package>
        </Block>
    )
  }

  const getBlockInformation = () => {
    return (
      <>
        <H2>{information[0].title}</H2>
        <P>{information[0].text}</P>
        <EstimatedTimeAndOutcomesBlock>
          {getEstimatedTimeInfo()}
          {getOutcomesInfo()}
        </EstimatedTimeAndOutcomesBlock>
      </>
    )
  }

  return (
    <Div bgColor={bgColor}>
      <Container>
        <MenuBlock>
          {getBlockMenuLabels()}
        </MenuBlock>

        <TextBlock>
          {getBlockInformation()}
          <PositionButtonWithArrow>
            <ButtonWithArrow
              buttonLabel={'read more'}
              redirectTo={`/services/${information[0].title}`}
              padding={'23px 35px;'}
            />
          </PositionButtonWithArrow>
        </TextBlock>
        <PositionCircleBlock>
          <CircleBlock>
            <Circle/>
            <PositionText>
              <TextAroundCircle/>
            </PositionText>
          </CircleBlock>
        </PositionCircleBlock>
      </Container>
    </Div>
  )
}

export default InformationComponent;
