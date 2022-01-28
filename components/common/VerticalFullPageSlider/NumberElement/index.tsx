import { INumberOfSlides } from "@interfaces";
import { Div, TopText, BottomText, Line } from "./style";

const NumberElement = ({ currentNumber, numberOfSlides }: INumberOfSlides) => (
  <Div>
    <TopText>{`0${currentNumber}`}</TopText>
    <Line/>
    <BottomText>{`0${numberOfSlides}`}</BottomText>
  </Div>
);

export default NumberElement;