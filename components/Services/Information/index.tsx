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
  PositionButtonWithArrow
} from "./Information.style";
import { IInformationComponent } from "@interfaces";
import React, { useEffect } from "react"
import { useState } from "react";
import OutcomesIcon from "../../../public/SVG/estimatedTimeIco.svg"
import EstimatedTimeIcon from "../../../public/SVG/OutcomesLogo.svg"
import ButtonWithArrow from "../../ButtonWithArrow";
import { maxSlideNumber, minSlideNumber } from "../../../utils";
import RadioButtons from "../../RadioButtons";
import { theme } from "../../../styles/theme";
import { debounce } from "debounce";

const InformationComponent = ({ bgColor, info }: IInformationComponent) => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [onBlockEnter, setOnBlockEnter] = useState(false);
  const [infoNumber, setInfoNumber] = useState(0);
  const [color, setColor] = useState(bgColor);
  const [information, setInformation] = useState([info[0]]);
  const handleScroll = () => {
    if (onBlockEnter) {
        const scroll = window.scrollY;

        if (scrollYPosition > scroll) {
          setInfoNumber(maxSlideNumber(infoNumber));
          setInformation([info[maxSlideNumber(infoNumber)]]);
        } else if (scrollYPosition < scroll) {
          setInfoNumber(minSlideNumber(infoNumber, info.length));
          setInformation([info[minSlideNumber(infoNumber, info.length)]]);
        }

      setScrollYPosition(scroll);
      // window.scroll (0, scrollYPosition);
      }
    }

  useEffect(() => {
    const debounceHandleScroll = debounce(handleScroll, 30);
    window.addEventListener('scroll', debounceHandleScroll)

    return () => window.removeEventListener('scroll', debounceHandleScroll);
  })

  // const onClick = (index: number, ...data: any) => {
  //   setColor('#FEC602;');
  //   setInformation(data);
  // }

  // const getBlockMenuLabels = () => {
  //   return info.map(({ title, text, outcomes , estimated_time }: any, index: number ) =>
  //     <MenuLabel
  //       key={index}
  //       onClick={() => onClick(index, { title, text, outcomes, estimated_time })}
  //       bgColor={color}
  //     >
  //       {title}
  //     </MenuLabel>
  //   )
  // }

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
    <Div
      bgColor={bgColor}
      onMouseEnter={() => {
        setOnBlockEnter(true);
      }}
      onMouseLeave={() => setOnBlockEnter(false)}
      id={'Element'}
    >
      <Container>
        <MenuBlock>
          <MenuLabel
              bgColor={color}
          >
            <RadioButtons
                padding={'8px 30px'}
                labels={info}
                currentIndex={infoNumber}
                bgColor={theme.colors.yellow}
                border={theme.colors.yellow}
                textColor={theme.colors.white}
                rowGap={'28.5px'}
                flexDirection={'column'}
                isHover={false}
                preventChange={true}
                fontWeight={'700'}
                cursor={'default'}
            />
          </MenuLabel>

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

      </Container>
    </Div>
  )
}

export default InformationComponent;
