import Link from "next/link";
import { Btn, ButtonWrapper } from "./style";
import Arrow from "../../public/navButtonArrow.svg";

export interface IButton {
  width: number;
  height: number;
  label: string;
  link: string;
  backgroundColor?: string;
  textColor?: string;
  arrow?: string;
}

const Button = ({
  width,
  height,
  label,
  link,
  backgroundColor,
  textColor,
  arrow,
}: IButton) => {
  const arrowCondition = arrow && <Arrow />;

  return (
    <Link href={link} passHref>
      <Btn
        textColor={textColor}
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        arrow={arrow}
      >
        <label>{label}</label>
        {arrowCondition}
      </Btn>
    </Link>
  );
};

export default Button;
