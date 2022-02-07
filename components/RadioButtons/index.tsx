import { ButtonsBlock, RadioButton } from "./RadioButtons.style";
import { theme } from "../../styles/theme";
import React from "react";
import {
  GetServicesPage_servicesPage_data_attributes_services_data,
  GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data,
} from "../../graphql/services/__generated__/GetServicesPage";

interface IRadioButtons {
  labels:
    | GetServicesPage_servicesPage_data_attributes_services_data[]
    | GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data[];
  currentIndex?: number;
  onChange?: Function;
  preventChange?: boolean;
  bgColor: string;
  border: string;
  textColor: string;
  padding: string;
  prefixForId: string;
  fontWeight?: string;
  flexDirection?: string;
  columnGap?: string;
  rowGap?: string;
  isHover?: boolean;
  cursor?: string;
}

const RadioButtons = ({
  labels,
  currentIndex,
  onChange,
  preventChange,
  bgColor = theme.colors.white,
  border = theme.colors.yellow,
  textColor = theme.colors.black,
  fontWeight = "normal",
  padding,
  flexDirection = "row",
  columnGap = "18px",
  rowGap = "0",
  isHover = true,
  cursor = "pointer",
  prefixForId
}: IRadioButtons) => {
  return (
    <ButtonsBlock
      flexDirection={flexDirection}
      columnGap={columnGap}
      rowGap={rowGap}
    >
      {labels.map(({ id, attributes }, index) => {
        const idWithPrefix = `${prefixForId}${id}`;
        return (
          <>
            {attributes?.name && (
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
                  type="radio"
                  value={attributes.name}
                  id={idWithPrefix}
                  onChange={(event) => {
                    if (preventChange) {
                      event.preventDefault();
                      return;
                    }

                    if (onChange) {
                      onChange(index);
                    }
                  }}
                  checked={index === currentIndex}
                />
                <label htmlFor={idWithPrefix}>{attributes?.name}</label>
              </RadioButton>
            )}
          </>
        );
      })}
    </ButtonsBlock>
  );
};

export default RadioButtons;
