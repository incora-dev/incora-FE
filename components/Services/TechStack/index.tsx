import {
  Container,
  Div,
  H2,
  H3,
  StackText,
  LogoAndTitle,
  StacksBlock,
  StacksContainer,
  StackTitle,
  InfoBlock,
  TextContainer,
  DotsPosition,
  LoaderPosition,
  PositionButtonWithArrow,
} from "./TechStack.style";
import { IStacks } from "@interfaces";
import { useEffect, useState } from "react";
import ButtonWithArrow from "../../ButtonWithArrow";
import Dots from "../../Homepage/Cooperate/elements/dots/dots";
import Loader from "../../../public/loading1.svg";
import Link from "next/link";
import RadioButtons from "../../RadioButtons";
import { theme } from "../../../styles/theme";
import { GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data } from "../../../graphql/services/__generated__/GetServicesPage";
import { ROUTES } from "../../../constants/routes";
import Image from "next/image";
import { IMAGES_LINK } from "../../../constants";
import { useIsMobile } from "../../../services/hooks";

interface ITechStack {
  stackTitle: string;
  stacks: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data[];
}

const GetStacksInfo = (
  stack: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data
) => {
  const { id, attributes } = stack;
  const name = attributes?.name;
  const description = attributes?.description;
  const technologies = attributes?.technologies?.data;
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

  return (
    <InfoBlock>
      <TextContainer>
        <H3>{name}</H3>
        <StackText>{description}</StackText>

        {!isMobile && !isTablet && !isSmallTablet && (
          <PositionButtonWithArrow>
            <ButtonWithArrow
              buttonLabel={"Contact"}
              redirectTo={`/services/`}
              bgColor={"#000"}
              textColor={"#fff"}
              padding={"23px 35px"}
            />
          </PositionButtonWithArrow>
        )}
      </TextContainer>

      <StacksContainer>
        <StacksBlock columns={isMobile || isTablet || isSmallTablet ? 2 : 3}>
          {technologies?.map((technology) => {
            const id = technology.id;
            const url = technology.attributes?.url;
            const name = technology.attributes?.Technology_name;

            const logo = technology.attributes?.icon?.data?.attributes;
            const src = IMAGES_LINK + logo?.url;
            const width = logo?.width;
            const height = logo?.height;

            return (
              <>
                {width && height && (
                  <Link
                    key={id}
                    href={ROUTES.EXPERTISE.TECHNOLOGIES + url}
                    passHref
                  >
                    <LogoAndTitle>
                      <Image
                        loader={() => src}
                        src={src}
                        width={width}
                        height={height}
                        alt="logo"
                      />
                      <StackTitle>{name}</StackTitle>
                    </LogoAndTitle>
                  </Link>
                )}
              </>
            );
          })}
        </StacksBlock>
      </StacksContainer>
      {(isMobile || isTablet) && (
        <PositionButtonWithArrow>
          <ButtonWithArrow
            buttonLabel={"Contact"}
            redirectTo={`/services/}`}
            bgColor={"#000"}
            textColor={"#fff"}
            padding={"23px 35px"}
          />
        </PositionButtonWithArrow>
      )}
    </InfoBlock>
  );
};

const TechStack = ({ stackTitle, stacks }: ITechStack) => {
  const [stackIndex, setStackIndex] = useState(0);
  const [stack, setStack] = useState(stacks[stackIndex]);
  const [animation, setAnimation] = useState(false);
  const onChangeStack = (index: number) => {
    setStackIndex(index);
    setStack(stacks[index]);
  };

  return (
    <Div onMouseEnter={() => setAnimation(true)}>
      <Container>
        <H2>{stackTitle}</H2>
        <RadioButtons
          labels={stacks}
          currentIndex={stackIndex}
          onChange={onChangeStack}
          bgColor={theme.colors.yellow}
          border={"1px solid #EFEFEF"}
          textColor={theme.colors.black}
          padding={"8px 30px"}
          flexDirection={"row"}
          isHover={true}
        />
        <GetStacksInfo {...stack} />

        <DotsPosition>
          <Dots
            numberOfDots={5}
            dotColor={"#FEC602"}
            animation={animation}
            size={"5px"}
            rowGap={"16.7px"}
          />
        </DotsPosition>

        {animation && (
          <LoaderPosition animation={animation}>
            <Loader width={166} height={166} viewBox="0 0 96 96" />
          </LoaderPosition>
        )}
      </Container>
    </Div>
  );
};

export default TechStack;
