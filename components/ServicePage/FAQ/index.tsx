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
import { theme } from "../../../styles/theme";

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

const FAQ = ({ title, titles }: IFAQ) => {
  const [blockIndex, setBlockIndex] = useState(0);
  const p = 'Surely the time frame depends on the complexity of the project. But considering our expertise we might say that it takes up to 2 weeks in average to fulfill the Discovery phase.';

  const getTitle = () => {
    return titles.map((title, index) => {
      const icon = getIcon(blockIndex, index);
      const openedFAQ = index === blockIndex;

      return (
            <AccordionWrapper
              key={title + index}
              isOpen={openedFAQ}
              lastBlock={index === titles.length - 1}
            >
              <Accordion
                onClick={() => {
                  if (blockIndex === index) {
                    return setBlockIndex(-1);
                  }
                  setBlockIndex(index);
                }}
              >
                <Title>{title}</Title>
                {icon}
              </Accordion>
              {index === blockIndex &&
                <TextBlock
                  onClick={() => {
                    if (blockIndex === index) {
                      return setBlockIndex(-1);
                    }
                    setBlockIndex(index);
                  }}
                >
                  <Text isOpen={openedFAQ}>{p}</Text>
                </TextBlock>
              }
            </AccordionWrapper>
          )
        }
    )
  }

  return (
    <Div>
      <Wrapper>
        <ContentWrapper>
          <H2>{title}</H2>
          <FAQWrapper>
            {getTitle()}
          </FAQWrapper>
        </ContentWrapper>
      </Wrapper>
    </Div>
  )
}

export default FAQ;
