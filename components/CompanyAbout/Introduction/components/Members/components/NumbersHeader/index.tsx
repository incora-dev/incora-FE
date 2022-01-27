import { NumbersHeaderWrapper } from "./style";

interface INumbersHeader {
  number: number | undefined;
  label: string | undefined;
}

const NumbersHeader = ({ number, label }: INumbersHeader) => {
  return (
    <NumbersHeaderWrapper>
      <h1>{number}+</h1>
      <span>{label}</span>
    </NumbersHeaderWrapper>
  );
};

export default NumbersHeader;
