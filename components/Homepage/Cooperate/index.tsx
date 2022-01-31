import React, { useState } from "react";
import { ISliders } from "@interfaces";
import Elements from "./elements/elements";
import InfoBlock from "./InfoBlock/InfoBlock";
import {
  Slider,
  Number,
  InfoContainer,
  ElementsPosition,
  PositionInfo,
  PositionNumber,
} from "./styles"

function CooperateComponent({ slide, index, plusesColor }: ISliders) {
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [animation4, setAnimation4] = useState(false);

  const getPositionRight = (number: number): string => {
    if (number === 0) {
      return '70px;'
    }

    if (number === 1) {
      return '85px;'
    }

    if (number === 2) {
      return '95px;'
    }

    if (number === 3) {
      return '46.5px;'
    }

    return ''
  }

  return (
    <Slider
      key={index}
      onMouseEnter={() => {
        if (index === 0) {
          setAnimation1(true)
        }

        if (index === 1) {
          setAnimation2(true)
        }

        if (index === 2) {
          setAnimation3(true)
        }

        if (index === 3) {
          setAnimation4(true)
        }
      }}
    >
      <ElementsPosition>
        {
          index === 0 &&
          <Elements
            elementNumber={index}
            plusesColor={plusesColor}
            animation={animation1}
          />
        }
        {
          index === 1 &&
          <Elements
            elementNumber={index}
            plusesColor={plusesColor}
            animation={animation2}
          />
        }
        {
          index === 2 &&
          <Elements
            elementNumber={index}
            plusesColor={plusesColor}
            animation={animation3}
          />
        }
        {
          index === 3 &&
          <Elements
            elementNumber={index}
            plusesColor={plusesColor}
            animation={animation4}
          />
        }
      </ElementsPosition>

      <PositionInfo positionRight={getPositionRight(index)}>
        <InfoContainer withGap={index === 1}>
          <PositionNumber>
            <Number>{`0${index + 1}`}</Number>
          </PositionNumber>
          <InfoBlock {...slide}/>
        </InfoContainer>
      </PositionInfo>
    </Slider>
  )
}

export default CooperateComponent;
