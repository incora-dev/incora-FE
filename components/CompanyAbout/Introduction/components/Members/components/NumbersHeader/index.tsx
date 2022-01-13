import { NumbersHeaderWrapper } from "./style";

interface INumbersHeader {
  number: number;
  text: string;
}

const NumbersHeader = ({ number, text }: INumbersHeader) => {
  return (
    <NumbersHeaderWrapper>
      <h1>{number}+</h1>
      <span>{text}</span>
    </NumbersHeaderWrapper>
  );
};

export default NumbersHeader;
