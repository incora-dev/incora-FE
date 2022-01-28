import React from 'react';
import RadioButtons from "../../../RadioButtons";
import { theme } from '../../../../styles/theme';
import { MenuBlock, MenuLabel } from './style';
import { IStacks } from '@interfaces';

interface ITextElementProps {
  labels: IStacks[];
  currentSlide: number;
  bgColor: string;
};

const TextElement = ({ labels, currentSlide, bgColor }: ITextElementProps) => (
  <MenuBlock>
    <MenuLabel
      bgColor={bgColor}
    >
      <RadioButtons
        padding={'8px 30px'}
        labels={labels}
        currentIndex={currentSlide}
        bgColor={theme.colors.yellow}
        border={theme.colors.yellow}
        textColor={theme.colors.white}
        rowGap={'28.5px'}
        flexDirection={'column'}
        isHover={false}
        preventChange={true}
        fontWeight={'700'}
        cursor={'default'}
      />
    </MenuLabel>
  </MenuBlock>
);

export default TextElement;
