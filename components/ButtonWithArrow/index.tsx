import Link from "next/link";
import { IButtonWithArrow } from "@interfaces";
import {
  Button,
  Label,
  Container,
  ButtonContainer,
} from "./ButtonWithArrow.style";
import ArrowIcon from "../../public/navButtonArrow.svg";

function ButtonWithArrow({
  buttonLabel,
  redirectTo,
  padding = "23px 48.5px;",
}: IButtonWithArrow) {
  return (
    <Container>
      <Link href={redirectTo} passHref>
        <ButtonContainer>
          <Button padding={padding}>
            <Label>{buttonLabel}</Label>
            <ArrowIcon />
          </Button>
        </ButtonContainer>
      </Link>
    </Container>
  );
}

export default ButtonWithArrow;
