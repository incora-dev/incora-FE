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
  MinusIconVisible,
} from "./FAQ.style";
import PlusIcon from "../../../public/icons/plusIcon.svg";
import MinusIcon from "../../../public/icons/minusIcon.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { GetService_services_data_attributes_faq_items } from "../../../graphql/services/__generated__/GetService";

interface IFaq {
  title: string;
  items?: (GetService_services_data_attributes_faq_items | null)[];
  titles?: string[];
  content?: any;
  textColor?: string;
}

interface IDescription {
  items?: (GetService_services_data_attributes_faq_items | null)[];
  blockIndex: number;
  setBlockIndex: Dispatch<SetStateAction<number>>;
  titles?: string[];
  content?: any;
  textColor?: string;
}

const getIcon = (blockIndex: number, index: number, textColor?: string) => {
  return blockIndex !== index ? (
    <PlusIconVisible color={textColor}>
      <PlusIcon />
    </PlusIconVisible>
  ) : (
    <MinusIconVisible color={textColor}>
      <MinusIcon />
    </MinusIconVisible>
  );
};

const Description = ({
  items,
  blockIndex,
  setBlockIndex,
  titles,
  content,
  textColor,
}: IDescription) => {
  let createDescription;
  if (items) {
    createDescription = items.map((item, index) => {
      const id = item?.id;
      const title = item?.title;
      const description = item?.description;
  
      const icon = getIcon(blockIndex, index, textColor);
      const openedFAQ = index === blockIndex;
  
      function onSetBlockIndex() {
        if (blockIndex === index) {
          return setBlockIndex(-1);
        }
        setBlockIndex(index);
      }
  
      return (
        <AccordionWrapper
          key={id}
          isOpen={openedFAQ}
          lastBlock={index === items.length - 1}
          textColor={textColor}
        >
          <Accordion onClick={onSetBlockIndex}>
            <Title>{title}</Title>
            {icon}
          </Accordion>
  
          {index === blockIndex && (
            <TextBlock onClick={onSetBlockIndex}>
              <Text isOpen={openedFAQ}>
                {content ? content[index] : description}
              </Text>
            </TextBlock>
          )}
        </AccordionWrapper>
      );
    });
  } else {
    createDescription = titles?.map((title, index) => {
      const icon = getIcon(blockIndex, index, textColor);
      const openedFAQ = index === blockIndex;
  
      function onSetBlockIndex() {
        if (blockIndex === index) {
          return setBlockIndex(-1);
        }
        setBlockIndex(index);
      }
  
      return (
        <AccordionWrapper
          key={title}
          isOpen={openedFAQ}
          lastBlock={index === titles.length - 1}
          textColor={textColor}
        >
          <Accordion onClick={onSetBlockIndex}>
            <Title>{title}</Title>
            {icon}
          </Accordion>
  
          {index === blockIndex && (
            <TextBlock onClick={onSetBlockIndex}>
              <Text isOpen={openedFAQ}>
                {content[index]}
              </Text>
            </TextBlock>
          )}
        </AccordionWrapper>
      );
    });
  }

  return <>{createDescription}</>;
};

const Faq = ({ title, items, titles, content, textColor }: IFaq) => {
  const [blockIndex, setBlockIndex] = useState(0);

  return (
    <Div>
      <Wrapper>
        <ContentWrapper>
          <H2>{title}</H2>
          <FAQWrapper>
            <Description
              items={items}
              blockIndex={blockIndex}
              setBlockIndex={setBlockIndex}
              titles={titles}
              content={content}
              textColor={textColor}
            />
          </FAQWrapper>
        </ContentWrapper>
      </Wrapper>
    </Div>
  );
};

export default Faq;
