import {
  Div,
  Wrapper,
  TextContainer,
  TextBlock,
  H1,
  H2,
  Text,
  PositionIcon,
  PositionHexagon1,
  PositionHexagon2,
  PositionHexagon3,
  PositionHexagon4,
  PositionHexagon5,
  PositionHexagon6,
  PositionHexagon7,
  PositionHexagon8,
  PositionHexagon9,
  PositionHexagon10,
  PositionHexagon11,
  PositionHexagon12,
  PositionHexagon13,
  PositionHexagon14,
  PositionHexagon15,
  PositionHexagon16,
  PositionHexagon17
} from "../../../pages/services/service.style";
import GetIcon from "../GetIcon";
import { IHeaderService } from "@interfaces";
import HexagonFilled from "../../../public/hexagonFilled.svg";
import HexagonBordered from "../../../public/hexagonBordered.svg";
import { theme } from "../../../styles/theme";

const getElements = (color: string) => {
  return (
    <>
      <PositionHexagon1 color={color}>
        <HexagonFilled/>
      </PositionHexagon1>

      <PositionHexagon2>
        <HexagonBordered/>
      </PositionHexagon2>

      <PositionHexagon3 color={color}>
        <HexagonFilled/>
      </PositionHexagon3>

      <PositionHexagon4>
        <HexagonBordered/>
      </PositionHexagon4>

      <PositionHexagon5 color={color}>
        <HexagonFilled/>
      </PositionHexagon5>

      <PositionHexagon6>
        <HexagonBordered/>
      </PositionHexagon6>

      <PositionHexagon7 color={color}>
        <HexagonFilled/>
      </PositionHexagon7>

      <PositionHexagon8>
        <HexagonBordered/>
      </PositionHexagon8>

      <PositionHexagon9 color={color}>
        <HexagonFilled/>
      </PositionHexagon9>

      <PositionHexagon10>
        <HexagonBordered/>
      </PositionHexagon10>

      <PositionHexagon11 color={color}>
        <HexagonFilled/>
      </PositionHexagon11>

      <PositionHexagon12>
        <HexagonBordered width={192} height={222} viewBox="0 0 143 165"/>
      </PositionHexagon12>

      <PositionHexagon13 color={color}>
        <HexagonFilled/>
      </PositionHexagon13>

      <PositionHexagon14>
        <HexagonBordered/>
      </PositionHexagon14>

      <PositionHexagon15 color={color}>
        <HexagonFilled/>
      </PositionHexagon15>

      <PositionHexagon16>
        <HexagonBordered/>
      </PositionHexagon16>

      <PositionHexagon17>
        <HexagonBordered/>
      </PositionHexagon17>
    </>
  )
}


const HeaderService = ({
  title,
  titleSize = '48px',
  text,
  label,
  textWidth,
  hexagonColor = theme.elements.hexagonBorderedBlack,
  bgColor = theme.colors.black
}: IHeaderService) => {
  const icon = GetIcon(title);
  const Elements = getElements(hexagonColor);
  const labelText = label && <H2>{label}</H2>;

  return (
      <Div bgColor={bgColor}>
        <Wrapper>
          <TextContainer>
            {labelText}
            <TextBlock bgColor={bgColor}>
              <H1 titleSize={titleSize}>{title}</H1>
              <Text textWidth={textWidth}>{text}</Text>
            </TextBlock>
          </TextContainer>

          <PositionIcon>
            {icon}
          </PositionIcon>
          {Elements}
        </Wrapper>
      </Div>
  )
}

export default HeaderService;
