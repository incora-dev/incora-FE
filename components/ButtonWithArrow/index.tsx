import Link from "next/link";
import { IButtonWithArrow } from "@interfaces";
import { Arrow, Button, Label  } from "./ButtonWithArrow.style";

function ButtonWithArrow({ buttonLabel, redirectTo }: IButtonWithArrow) {
  return (
    <Link href={redirectTo}>
      <Button>
        <Label>{buttonLabel}</Label>
        <Arrow/>
      </Button>
    </Link>
  )
}

export default ButtonWithArrow;
