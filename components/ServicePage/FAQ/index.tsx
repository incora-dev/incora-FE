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
}

const getIcon = (blockIndex: number, index: number) => {
  return (blockIndex !== index)
    ? <PlusIconVisible>
        <PlusIcon/>
      </PlusIconVisible>

    : <MinusIconVisible>
        <MinusIcon/>
      </MinusIconVisible>
}

const p = 'Surely the time frame depends on the complexity of the project. But considering our expertise we might say that it takes up to 2 weeks in average to fulfill the Discovery phase.';

const getTitle = (titles: string[], blockIndex: number, setBlockIndex: Function) =>
  titles.map((title, index) => {
    const icon = getIcon(blockIndex, index);
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
      >
        <Accordion onClick={onSetBlockIndex}>
          <Title>{title}</Title>
          {icon}
        </Accordion>

        { index === blockIndex &&
          <TextBlock onClick={onSetBlockIndex}>
            <Text isOpen={openedFAQ}>{p}</Text>
          </TextBlock>
        }
      </AccordionWrapper>
    )
  });

const FAQ = ({ title, titles }: IFAQ) => {
  const [blockIndex, setBlockIndex] = useState(0);
  const label = getTitle(titles, blockIndex, setBlockIndex);

  return (
    <Div>
      <Wrapper>
        <ContentWrapper>
          <H2>{title}</H2>

          <FAQWrapper>{label}</FAQWrapper>
        </ContentWrapper>
      </Wrapper>
    </Div>
  )
}

export default FAQ;
