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

const getIcon = (openFAQ: boolean, setOpenFAQ: Function, index: number,  setBlockIndex: Function) => {
  if (!openFAQ) {
    return (
        <PlusIconVisible>
          <PlusIcon onClick={() => {
            setOpenFAQ(!openFAQ);
            setBlockIndex(index);
          }}/>
        </PlusIconVisible>
    )
  } else {
    return (
        <MinusIconVisible>
          <MinusIcon onClick={() => {
            setOpenFAQ(!openFAQ);
            setBlockIndex(index);
          }}/>
        </MinusIconVisible>
    )
  }
}

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(false);
  const [blockIndex, setBlockIndex] = useState(-1);

  const p = 'Surely the time frame depends on the complexity of the project. But considering our expertise we might say that it takes up to 2 weeks in average to fulfill the Discovery phase.';
  const titles = ['How long does it take to undertake the Discovery phase?', 'Which team members should be involved in the Discovery phase?', 'How much will it cost?', 'What are the deliverables of this service?', 'Which tools and methods are used for the process?']

  const getTitle = () => {
    return titles.map((title, index) =>
      <AccordionWrapper key={index}>
        <Accordion>
          <Title>{title}</Title>
          {getIcon(openFAQ,setOpenFAQ, index, setBlockIndex)}
        </Accordion>

        { index === blockIndex &&
          <TextBlock>
            <Text>{p}</Text>
          </TextBlock>
        }

      </AccordionWrapper>
    )
  }

  return (
    <Div>
      <Wrapper>
        <ContentWrapper>
          <H2>sadsa</H2>
          <FAQWrapper>
            {getTitle()}
          </FAQWrapper>
        </ContentWrapper>
      </Wrapper>
    </Div>
  )
}

export default FAQ;
