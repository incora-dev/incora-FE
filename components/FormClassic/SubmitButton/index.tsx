import { theme } from "../../../styles/theme";
import { Button, Label } from "./SubmitButton.style";
import Arrow from "../../../public/navButtonArrow.svg";

interface ISubmitButton {
  bgColor?: string;
  text: string;
}

const SubmitButton = ({ bgColor = theme.colors.yellow, text }: ISubmitButton) => {
  return (
    <Button
      type={'submit'}
      onSubmit={(event) => event.preventDefault()}
      bgColor={bgColor}
    >

      <Label>{text}</Label>

      <Arrow/>
    </Button>
  )
}

export default SubmitButton;
