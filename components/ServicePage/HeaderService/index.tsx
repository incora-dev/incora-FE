import {
  Div,
  Wrapper,
  TextContainer,
  TextBlock,
  H1,
  H2,
  Text,
  PositionIcon,
} from "../styles";
import { theme } from "../../../styles/theme";
import Elements from "../../Elements";
import {
  GetIndustryPage_industry_data_attributes_icon_data_attributes,
} from "../../../graphql/industries/__generated__/GetIndustryPage";
import Image from "next/image";
import { IMAGES_LINK } from "../../../constants";

interface IHeaderService {
  title: string;
  titleSize?: string;
  text: string;
  icon: GetIndustryPage_industry_data_attributes_icon_data_attributes;
  label?: string;
  textWidth: string;
  bgColor?: string;
  hexagonColor?: string;
}

const HeaderService = ({
  title,
  titleSize = "48px",
  text,
  icon,
  label,
  textWidth,
  hexagonColor = theme.elements.hexagonBorderedBlack,
  bgColor = theme.colors.black,
}: IHeaderService) => {
  const src = IMAGES_LINK + icon.url;
  const width = icon.width;
  const height = icon.height;

  const labelText = label && <H2>{label}</H2>;

  const renderCondition = width && height;

  return (
    <>
      {renderCondition && (
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
              <Image
                loader={() => src}
                src={src}
                width={width}
                height={height}
                alt="icon"
              />
            </PositionIcon>
            <Elements color={hexagonColor} />
          </Wrapper>
        </Div>
      )}
    </>
  );
};

export default HeaderService;