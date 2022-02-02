import Link from "next/link";
import Arrow from "../../public/navButtonArrow.svg";
import {
  Button,
  Label,
  Container,
  ButtonContainer,
} from "./ButtonWithArrow.style";

interface IButtonWithArrow {
  buttonLabel: string;
  redirectTo: string;
  padding?: string;
  bgColor?: string;
  textColor?: string;
}

function ButtonWithArrow({
  buttonLabel,
  redirectTo,
  padding = "23px 48.5px;",
  bgColor = "#fec602",
  textColor = "#000",
}: IButtonWithArrow) {
  return (
    <Container>
      <Link href={redirectTo}>
        <a>
          <ButtonContainer bgColor={bgColor} textColor={textColor}>
            <Button padding={padding} className="button-with-arrow">
              <Label>{buttonLabel}</Label>

              <Arrow />
            </Button>
          </ButtonContainer>
        </a>
      </Link>
    </Container>
  );
}

export default ButtonWithArrow;
