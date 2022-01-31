import { IRadioButtons} from "@interfaces";
import { ButtonsBlock, RadioButton } from "./RadioButtons.style";
import { theme } from "../../styles/theme";
import React from "react";

const RadioButtons = ({
    labels,
    currentIndex,
    onChange,
    preventChange,
    bgColor = theme.colors.white,
    border = theme.colors.yellow,
    textColor = theme.colors.black,
    fontWeight = 'normal',
    padding,
    flexDirection = 'row',
    columnGap = '18px',
    rowGap = '0',
    isHover = true,
    cursor = 'pointer',
    }: IRadioButtons
  ) => {
  return (
      <ButtonsBlock
        flexDirection={flexDirection}
        columnGap={columnGap}
        rowGap={rowGap}
      >
        {
          labels.map(({ title, id }, index) => {
              console.log(index, currentIndex);

              return (
                <RadioButton
                  key={id}
                  bgColor={bgColor}
                  border={border}
                  textColor={textColor}
                  fontWeight={fontWeight}
                  padding={padding}
                  isHover={isHover}
                  cursor={cursor}
                >
                      <input
                          type='radio'
                          value={title}
                          id={id}
                          onChange={(event) => {
                              if (preventChange)  {
                                  event.preventDefault();
                                  return;
                              }

                              if (onChange) {
                                  onChange(index);
                              }
                          }}
                          checked={index === currentIndex}
                    />
                      <label htmlFor={id}>{title}</label>
                </RadioButton>
            )
          })
        }
      </ButtonsBlock>
  )
}

export default RadioButtons;
