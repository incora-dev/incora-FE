import { ISliders } from "@interfaces";
import { useState } from "react";
import ScrollSlider from "./scrollSlider/scrollSlider";
import InfoBlock from "./InfoBlock/InfoBlock";
import {
  Cooperate,
  Slider,
  Number,
  InfoContainer,
  ElementsPosition,
  PositionScrollSlider,
  PositionInfo,
  PositionNumber
} from "./styles"
import Elements from "./elements/elements";

function CooperateComponent(props: ISliders) {
  const { sliders, plusesColor } = props;
  const [currentNumber, setCurrentNumber] = useState(1);
  const [information, setInformation] = useState({...sliders[0]});
  const numberOfSlides = sliders.length;

  const onClick = () => {
    const setInfo = (number: number) => {
      setInformation({...sliders[number - 1]});
      setCurrentNumber(number)
    };

    currentNumber === sliders.length
      ? setInfo(1)
      : setInfo(currentNumber + 1)
  }

  const getPositionRight = (number: number): string => {
    if (number === 1) {
      return '48px;'
    }

    if (number === 2) {
      return '85px;'
    }

    if (number === 3) {
      return '95px;'
    }

    if (number === 4) {
      return '51px;'
    }

    return ''
  }

  return (
    <Cooperate onClick={onClick}>
      <PositionScrollSlider>
        <ScrollSlider currentNumber={currentNumber} numberOfSlides={numberOfSlides} />
      </PositionScrollSlider>

      <Slider>
        <ElementsPosition>
          <Elements elementNumber={currentNumber} plusesColor={plusesColor}/>
        </ElementsPosition>

        <PositionInfo positionRight={getPositionRight(currentNumber)}>
          <InfoContainer>
            <PositionNumber>
              <Number>{`0${currentNumber}`}</Number>
            </PositionNumber>
            <InfoBlock {...information}/>
          </InfoContainer>
        </PositionInfo>
      </Slider>
    </Cooperate>
  )
}

export default CooperateComponent;
