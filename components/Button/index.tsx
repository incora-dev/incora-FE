import Link from "next/link";
import { Btn, ButtonWrapper } from "./style";

export interface IButton {
  width: number;
  height: number;
  label: string;
  link: string;
}

const Button = ({ width, height, label, link }: IButton) => {
  return (
    <Link href={link} passHref>
      <Btn width={width} height={height}>
        <label>{label}</label>
      </Btn>
    </Link>
  );
};

export default Button;
