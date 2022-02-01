import React from "react";
import RadioButtons from "../../../RadioButtons";
import { theme } from "../../../../styles/theme";
import { MenuBlock, MenuLabel } from "./style";
import { IStacks } from "@interfaces";
import { GetServicesPage_servicesPage_data_attributes_services_data } from "../../../../graphql/services/__generated__/GetServicesPage";

interface ITextElementProps {
  labels: GetServicesPage_servicesPage_data_attributes_services_data[];
  currentSlide?: number;
  bgColor: string;
  onChange?: (e:any) => void;
};

const TextElement = ({ labels, currentSlide, bgColor, onChange }: ITextElementProps) => (
  <MenuBlock>
    <MenuLabel bgColor={bgColor}>
      <RadioButtons
        padding={"8px 30px"}
        labels={labels}
        currentIndex={currentSlide}
        bgColor={theme.colors.yellow}
        border={theme.colors.yellow}
        textColor={theme.colors.white}
        rowGap={"28.5px"}
        flexDirection={"column"}
        isHover={false}
        preventChange={false}
        fontWeight={'700'}
        cursor={'default'}
        onChange={onChange}
      />
    </MenuLabel>
  </MenuBlock>
);

export default TextElement;
