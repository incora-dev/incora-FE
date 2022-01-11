import {ISliderInfo, ISliders} from "@interfaces";
import {useEffect, useState} from "react";
import ScrollSlider from "./scrollSlider/scrollSlider";
import InfoBlock from "./InfoBlock/InfoBlock";
import ReactPageScroller from 'react-page-scroller';
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
import React from "react";

function CooperateComponent(props: ISliders) {
  const { sliders, plusesColor } = props;
  const [currentNumber, setCurrentNumber] = useState(1);
  const [information, setInformation] = useState({...sliders[0]});
  const [scroll, setScroll] = useState(0)
  const numberOfSlides = sliders.length;

  const onClick = () => {
    const setInfo = (number: number) => {
      setInformation({...sliders[number]});
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

  const createSliderElements = (sliders: ISliderInfo[]) => {
    const sliderElements = [];
    let count = 1;

    while(sliderElements.length !== sliders.length) {
      sliderElements.push(
        <Slider key={count-1}>
          <ElementsPosition>
            <Elements elementNumber={count} plusesColor={plusesColor}/>
          </ElementsPosition>

          <PositionInfo positionRight={getPositionRight(count)}>
            <InfoContainer>
              <PositionNumber>
                <Number>{`0${count}`}</Number>
              </PositionNumber>
              <InfoBlock {...sliders[count - 1]}/>
            </InfoContainer>
          </PositionInfo>
        </Slider>
      )

      count++;
    }
    return sliderElements;
  }

  const sliderElements = createSliderElements(sliders);

  return (
    <Cooperate onClick={onClick}>
      <PositionScrollSlider>
        <ScrollSlider currentNumber={currentNumber} numberOfSlides={numberOfSlides} />
      </PositionScrollSlider>

      <ReactPageScroller
        containerHeight={"89vh"}
        pageOnChange={(value) => setCurrentNumber(value + 1)}
      >
        {sliderElements}
      </ReactPageScroller>
    </Cooperate>
  )
}

export default CooperateComponent;
