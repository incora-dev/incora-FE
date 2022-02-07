import Link from "next/link";
import { MouseEventHandler } from "react";
import Arrow from "../../public/navButtonArrow.svg";
import { theme } from "../../styles/theme";
import {
  Button,
  Label,
  Container,
  ButtonContainer,
} from "./ButtonWithArrow.style";

interface IButtonWithArrow {
  buttonLabel: string;
  redirectTo?: string;
  padding?: string;
  bgColor?: string;
  textColor?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

function ButtonWithArrow({
  buttonLabel,
  redirectTo,
  padding = "23px 48.5px;",
  bgColor = theme.colors.yellow,
  textColor = "#000",
  onClick,
}: IButtonWithArrow) {
  const renderButtonContainer = () => <ButtonContainer bgColor={bgColor} textColor={textColor}>
    <Button padding={padding} className="button-with-arrow">
      <Label>{buttonLabel}</Label>
      <Arrow />
    </Button>
  </ButtonContainer>;

  const renderButton = () => {
    if (redirectTo) {
      return (
        <Link href={redirectTo} passHref>
          <a>
            {renderButtonContainer()}
          </a>
        </Link>
      );
    }
    if (onClick) {
      return (
        <a href={redirectTo} onClick={onClick}>
          {renderButtonContainer()}
        </a>
      );
    }
  }

  return (
    <Container>
      {renderButton()}
    </Container>
  );
}

export default ButtonWithArrow;
