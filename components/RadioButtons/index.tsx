import { IRadioButtons} from "@interfaces";
import { ButtonsBlock, RadioButton } from "./RadioButtons.style";
import { theme } from "../../styles/theme";
import React from "react";

const RadioButtons = ({
    labels,
    currentIndex,
    onChange,
    bgColor = theme.colors.white,
    border = theme.colors.yellow,
    textColor = theme.colors.black,
    padding,
    columnGap = '18px',
    rowGap = '0'
    }: IRadioButtons
  ) => {

  return (
      <ButtonsBlock columnGap={columnGap} rowGap={rowGap}>
        {
          labels.map(({ title }, index) => {
            return (
                <RadioButton
                  key={index}
                  bgColor={bgColor}
                  border={border}
                  textColor={textColor}
                  padding={padding}
                >
                  {
                    (index === currentIndex) &&
                    <>
                      <input
                          type='radio'
                          value={title}
                          id={title}
                          onClick={() => onChange(index)}
                          checked
                      />
                      <label htmlFor={title}>{title}</label>
                    </>
                  } {
                    (index !== currentIndex) &&
                      <>
                        <input
                            type='radio'
                            value={title}
                            id={title}
                            onClick={() => onChange(index)}
                        />
                        <label htmlFor={title}>{title}</label>
                      </>
                  }
                </RadioButton>
            )
          })
        }
      </ButtonsBlock>
  )
}

export default RadioButtons;
