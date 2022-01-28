import Link from "next/link";
import { Btn } from "./style";
import Arrow from "../../public/navButtonArrow.svg";
import { MouseEventHandler } from "react";

export interface IButton {
  width: number;
  height: number;
  label: string;
  link?: string;
  backgroundColor?: string;
  textColor?: string;
  arrow?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
  width,
  height,
  label,
  link,
  backgroundColor,
  textColor,
  arrow,
  onClick,
}: IButton) => {
  const arrowCondition = arrow && <Arrow />;

  const button = (
    <Btn
      textColor={textColor}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      arrow={arrow}
      onClick={onClick}
    >
      <label>{label}</label>
      {arrowCondition}
    </Btn>
  );

  const linkCondition = link ? (
    <Link href={link} passHref>
      {button}
    </Link>
  ) : (
    <>{button}</>
  );

  return linkCondition;
};

export default Button;
