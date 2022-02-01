import {
  Div,
  Wrapper,
  ContentWrapper,
  H2,
  FAQWrapper,
  Title,
  AccordionWrapper,
  Accordion,
  TextBlock,
  Text,
  PlusIconVisible,
  MinusIconVisible
} from "./FAQ.style";
import PlusIcon from "../../../public/icons/plusIcon.svg";
import MinusIcon from "../../../public/icons/minusIcon.svg";
import { useState } from "react";

interface IFAQ {
  title: string;
  titles: string[];
  content?: any;
  textColor?: string;
}

const getIcon = (blockIndex: number, index: number, textColor?: string) => {
  return (blockIndex !== index)
    ? <PlusIconVisible color={textColor} >
        <PlusIcon/>
      </PlusIconVisible>

    : <MinusIconVisible color={textColor}  >
        <MinusIcon/>
      </MinusIconVisible>
}

const p = 'Surely the time frame depends on the complexity of the project. But considering our expertise we might say that it takes up to 2 weeks in average to fulfill the Discovery phase.';

const getTitle = ({
  titles, 
  blockIndex, 
  setBlockIndex, 
  content, 
  textColor}:{
    titles: string[], 
    blockIndex: number, 
    setBlockIndex: Function, 
    content?: any, 
    textColor?: string}) =>
  titles.map((title, index) => {
    const icon = getIcon(blockIndex, index, textColor);
    const openedFAQ = index === blockIndex;

    function onSetBlockIndex() {
      if (blockIndex === index) {
        return setBlockIndex(-1);
      }
      setBlockIndex(index);
    };

    return (
      <AccordionWrapper
        key={title + index}
        isOpen={openedFAQ}
        lastBlock={index === titles.length - 1}
        textColor={textColor}
      >
        <Accordion onClick={onSetBlockIndex}>
          <Title>{title}</Title>
          {icon}
        </Accordion>

        { index === blockIndex &&
          <TextBlock onClick={onSetBlockIndex}>
            <Text isOpen={openedFAQ}>{content ? content[index] : p}</Text>
          </TextBlock>
        }
      </AccordionWrapper>
    )
  });

const FAQ = ({ title, titles, content, textColor }: IFAQ) => {
  const [blockIndex, setBlockIndex] = useState(0);
  const label = getTitle({titles, blockIndex, setBlockIndex, content, textColor});

  return (
    <Div>
      <Wrapper>
        <ContentWrapper>
          <H2>{title}</H2>
          <FAQWrapper>
            {label}
          </FAQWrapper>
        </ContentWrapper>
      </Wrapper>
    </Div>
  )
}

export default FAQ;
