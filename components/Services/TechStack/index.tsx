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
  Button,
  ButtonsBlock,
  DotsPosition,
  LoaderPosition,
  PositionButtonWithArrow
} from "./TechStack.style";
import { IStacks, ITechStack } from "@interfaces";
import { useState } from "react";
import ButtonWithArrow from "../../ButtonWithArrow";
import Dots from "../../homePage/Cooperate/elements/dots/dots";
import Loader from "../../../public/loading1.svg"

const getStacksTitle = (stacks: IStacks[], setStack: Function) => {
  return (
    <ButtonsBlock>
      { stacks.map(({title}, index) =>
        <Button key={index} onClick={() => setStack(stacks[index])}>{title}</Button>
      )}
    </ButtonsBlock>
  )
}

const getStacksInfo = (stack: IStacks) => {
  const { title, text, stacks, stacksLogo } = stack;
  const columns = Math.ceil(stacksLogo.length / 2);

  return (
    <InfoBlock>
      <TextContainer>
        <H3>{title}</H3>
        <StackText>{text}</StackText>

        <PositionButtonWithArrow>
          <ButtonWithArrow
              buttonLabel={'Contact'}
              redirectTo={`/services/${title}`}
              bgColor={'#000'}
              textColor={'#fff'}
              padding={'23px 35px'}
          />
        </PositionButtonWithArrow>
      </TextContainer>

      <StacksContainer>
        <StacksBlock columns={columns}>
          {
            stacks.map((label, index) => {
              const Logo: any = stacksLogo[index];

              return (
                <LogoAndTitle key={index}>
                  <Logo/>
                  <StackTitle>{label}</StackTitle>
                </LogoAndTitle>
              )
            })
          }
        </StacksBlock>
      </StacksContainer>
    </InfoBlock>
  )
}

const TechStack = ({ stackTitle, stacks} : ITechStack) => {
  const [stack, setStack] = useState(stacks[0]);
  const [animation, setAnimation] = useState(false);
  const stacksTitle = getStacksTitle(stacks, setStack);
  const stacksInfo = getStacksInfo(stack);
  return (
    <Div onMouseEnter={() => setAnimation(true)}>
      <Container>
        <H2>{stackTitle}</H2>
        {stacksTitle}
        {stacksInfo}

        <DotsPosition>
          <Dots
            numberOfDots={5}
            dotColor={'#FEC602'}
            animation={animation}
            size={'5px'}
            rowGap={'16.7px'}
          />
        </DotsPosition>

        {
          animation &&
          <LoaderPosition animation={animation}>
            <Loader
              width={166}
              height={166}
              viewBox="0 0 96 96"
            />
          </LoaderPosition>
        }

      </Container>
    </Div>
  )
}

export default TechStack;
