import Link from "next/link";
import { IButtonWithArrow } from "@interfaces";
import Arrow from "../../public/navButtonArrow.svg";
import {
  Button,
  Label,
  Container,
  ButtonContainer,
} from "./ButtonWithArrow.style";
import ArrowIcon from "../../public/navButtonArrow.svg";

function ButtonWithArrow(
  { buttonLabel,
    redirectTo,
    padding = '23px 48.5px;',
    bgColor = '#fec602',
    textColor = '#000'
  }: IButtonWithArrow) {

    return (
      <Container>
        <a href={redirectTo}>
          <ButtonContainer bgColor={bgColor} textColor={textColor}>
            <Button padding={padding}>
              <Label>{buttonLabel}</Label>
              <Arrow/>
            </Button>
          </ButtonContainer>
        </a>
      </Container>
    )
}

export default ButtonWithArrow;
