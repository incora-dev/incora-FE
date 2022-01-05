import Link from "next/link";
import { IButtonWithArrow } from "@interfaces";
import { Arrow, Button, Label, Container  } from "./ButtonWithArrow.style";

function ButtonWithArrow({ buttonLabel, redirectTo }: IButtonWithArrow) {
  return (
    <Container>
      <Link href={redirectTo}>
        <Button padding={'23px 48.5px;'}>
          <Label>{buttonLabel}</Label>
          <Arrow/>
        </Button>
      </Link>
    </Container>
  )
}

export default ButtonWithArrow;
