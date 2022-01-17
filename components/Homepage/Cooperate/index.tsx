import { ISliderInfo, ISliders } from "@interfaces";
import { useEffect, useRef, useState } from "react";
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
  PositionNumber,
  Div
} from "./styles"
import Elements from "./elements/elements";
import React from "react";
import { maxSlideNumber, minSlideNumber } from "../../../utils";

function CooperateComponent(props: ISliders) {
  const { sliders, plusesColor, setCurrentSlide } = props;
  const [currentNumber, setCurrentNumber] = useState(0);
  const numberOfSlides = sliders.length;
  const [checkScroll, setCheckScroll] = useState(0);
  const [mouseOnBlock, setMouseOnBlock] = useState(false);
  const [slide, setSlide] = useState(0);
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [animation4, setAnimation4] = useState(false);

  const handleScroll = () => {
    if (mouseOnBlock) {
      setTimeout(() => {
        const scrollY = window.scrollY;
        let scrollUp = false;
        let scrollDown = false;

        checkScroll > scrollY
          ? scrollUp = true
          : scrollDown = true;

        if (scrollUp && slide > 0) {
          setSlide(maxSlideNumber(slide));
          setCurrentSlide(maxSlideNumber(slide));
          setCurrentNumber(maxSlideNumber(slide));
          console.log('Scroll Top');
        } else if (scrollUp && slide === 0) {
          console.log('Scroll Top to Header');
        } else if (scrollDown) {
          setCurrentSlide(minSlideNumber(slide, sliders.length));
          setSlide(minSlideNumber(slide, sliders.length));
          setCurrentNumber(minSlideNumber(slide, sliders.length))
        }

        setCheckScroll(window.scrollY);
      }, 500)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const getPositionRight = (number: number): string => {
    if (number === 1) {
      return '70px;'
    }

    if (number === 2) {
      return '85px;'
    }

    if (number === 3) {
      return '95px;'
    }

    if (number === 4) {
      return '46.5px;'
    }

    return ''
  }

  const createSliderElements = (sliders: ISliderInfo[]) => {
    const sliderElements = [];
    let count = 1;

    while(sliderElements.length !== sliders.length) {
      sliderElements.push(
        <Slider
          key={count - 1}
          onMouseEnter={() => {
            if (slide === 0) {
              setAnimation1(true)
            }

            if (slide === 1) {
              setAnimation2(true)
            }

            if (slide === 2) {
              setAnimation3(true)
            }

            if (slide === 3) {
              setAnimation4(true)
            }
          }}
        >
          <ElementsPosition>
            {
              count === 1 &&
              <Elements
                elementNumber={count}
                plusesColor={plusesColor}
                animation={animation1}
              />
            }
            {
              count === 2 &&
              <Elements
                elementNumber={count}
                plusesColor={plusesColor}
                animation={animation2}
              />
            }
            {
              count === 3 &&
              <Elements
                elementNumber={count}
                plusesColor={plusesColor}
                animation={animation3}
              />
            }
            {
              count === 4 &&
              <Elements
                elementNumber={count}
                plusesColor={plusesColor}
                animation={animation4}
              />
            }
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

  return (
    <Cooperate
      onMouseEnter={() => setMouseOnBlock(true)}
      onMouseLeave={() => setMouseOnBlock(false)}
    >
      <section>
        <PositionScrollSlider>
          <ScrollSlider currentNumber={currentNumber + 1} numberOfSlides={numberOfSlides} />
        </PositionScrollSlider>

        <Div
          slide={slide}
        >
          {
            createSliderElements(sliders)
          }
        </Div>
      </section>
    </Cooperate>

  )
}

export default CooperateComponent;
