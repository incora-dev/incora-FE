import { INumberOfSlides } from "@interfaces";
import { Div, TopText, BottomText, Line } from "./styles";

function ScrollSlider(props: INumberOfSlides) {
  const { currentNumber, numberOfSlides} = props;

  return (
    <Div>
      <TopText>{`0${currentNumber}`}</TopText>
      <Line/>
      <BottomText>{`0${numberOfSlides}`}</BottomText>
    </Div>
  )
}

export default ScrollSlider;
