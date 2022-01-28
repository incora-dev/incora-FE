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
import { IStacks, ITechStack } from "@interfaces";
import { useEffect, useState } from "react";
import ButtonWithArrow from "../../ButtonWithArrow";
import Dots from "../../Homepage/Cooperate/elements/dots/dots";
import Loader from "../../../public/loading1.svg";
import Link from "next/link";
import RadioButtons from "../../RadioButtons";
import { theme } from "../../../styles/theme";

const GetStacksInfo = (stack: IStacks) => {
  const { title, text, stacks, stacksLogo } = stack;
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace("px", "");
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  }, []);

  return (
    <InfoBlock>
      <TextContainer>
        <H3>{title}</H3>
        <StackText>{text}</StackText>

        <PositionButtonWithArrow>
          <ButtonWithArrow
            buttonLabel={"Contact"}
            redirectTo={`/services/${title}`}
            bgColor={"#000"}
            textColor={"#fff"}
            padding={"23px 35px"}
          />
        </PositionButtonWithArrow>
      </TextContainer>

      <StacksContainer>
        <StacksBlock columns={isMobile ? 2 : 3}>
          {stacks?.map((label, index) => {
            const Logo: any = stacksLogo && stacksLogo[index];

            return (
              <Link key={index} href={label.toLowerCase()}>
                <LogoAndTitle>
                  <Logo />
                  <StackTitle>{label}</StackTitle>
                </LogoAndTitle>
              </Link>
            );
          })}
        </StacksBlock>
      </StacksContainer>
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
