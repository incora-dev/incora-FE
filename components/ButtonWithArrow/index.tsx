import Link from "next/link";
import { IButtonWithArrow } from "@interfaces";
import { Arrow, Button, Label, Container, ButtonContainer } from "./ButtonWithArrow.style";

function ButtonWithArrow({ buttonLabel, redirectTo, padding = '23px 48.5px;'}: IButtonWithArrow) {
  return (
    <Container>
      <Link href={redirectTo}>
        <ButtonContainer>
          <Button padding={padding}>
            <Label>{buttonLabel}</Label>
            <Arrow/>
          </Button>
        </ButtonContainer>
      </Link>
    </Container>
  )
}

export default ButtonWithArrow;
