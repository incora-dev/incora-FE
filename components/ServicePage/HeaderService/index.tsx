import {
  Div,
  Wrapper,
  TextContainer,
  TextBlock,
  H1,
  H2,
  Text,
  PositionIcon
} from "../styles";
import GetIcon from "../GetIcon";
import { IHeaderService } from "@interfaces";
import { theme } from "../../../styles/theme";
import Elements from "../../Elements";


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
          <Elements color={hexagonColor}/>
        </Wrapper>
      </Div>
  )
}

export default HeaderService;
