import {
  Div,
  Wrapper,
  ScrollLabels,
  MainText,
  Tags,
  SocialTitleAndTagsBlock,
  P,
  ScrollLabel,
  Line,
  Label,
  StickyWrapper,
  LineRetreat,
  PollBlock,
  PollTitle,
  ChooseElements,
  Element,
  ElementTitle
} from "./ArticleInfo.style";
import { ReactElement, useEffect, useState } from "react";
import Technologies from "../../Homepage/EmbodiedIdeas/Projects/Technologies";

interface IArticleInfo {
  mainText: any;
  scrollLabels: string[];
  socialTitles: ReactElement[];
  tags: string[];
}

const pollTitle = 'What’s your impression after reading this article?';
const pollLabels = ['Love it!', 'Valuable', 'Exciting', 'Unsatisfied'];

function getScrollLabels(labels: string[], elementIndex: number) {
  return (
    labels.map((label, index) => {
      const selected = elementIndex === index;

       return (
         <ScrollLabel key={index}>
            <Line/>
            <Label selected={selected}>{label}</Label>
         </ScrollLabel>
       )
      }
    )
  )
};

function getElements(labels: string[], selected: number, setSelect: Function) {
  return (
    labels.map((label, index) => {
      const shouldSelect = selected === index;
      return (
        <Element key={index} onClick={() => setSelect(index)} selected={shouldSelect}>
          {/*<ElementIcon></ElementIcon>*/}
          <ElementTitle>{label}</ElementTitle>
        </Element>
      )
    })
  )
};

const ArticleInfo = ({ mainText, scrollLabels, socialTitles, tags }: IArticleInfo) => {
  const [selectedElementIndex, setElementIndex] = useState(0);
  const [sideBarElements, setSideBarElements] = useState<NodeListOf<Element> | Array<any>>([]);
  const [selected, setSelect] = useState(-1);

  const scrollTitles = getScrollLabels(scrollLabels, selectedElementIndex);
  const elements = getElements(pollLabels, selected, setSelect);

  const handleScroll = () => {
    sideBarElements.forEach((el, index) => {
      if (el.getBoundingClientRect().top > 120 && el.getBoundingClientRect().top < 500) {
        setElementIndex(index);
      }
    })
  }


  useEffect(() => {
    setSideBarElements(document.querySelectorAll('#scrollsLabels h1,#scrollsLabels h2, #scrollsLabels h3, #scrollsLabels h4, #scrollsLabels h5, #scrollsLabels h6'));
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <Div id={'scrollsLabels'}>
      <Wrapper>
        <StickyWrapper>
          <ScrollLabels>
            {scrollTitles}
          </ScrollLabels>
        </StickyWrapper>

        <MainText>
          {mainText}
          <LineRetreat/>

          <PollBlock>
            <PollTitle>{pollTitle}</PollTitle>
            <ChooseElements>{elements}</ChooseElements>
          </PollBlock>
        </MainText>

        <StickyWrapper>
          <SocialTitleAndTagsBlock>
            <Tags>
              <P>Tags</P>
              <Technologies technologies={tags}/>
            </Tags>
          </SocialTitleAndTagsBlock>
        </StickyWrapper>
      </Wrapper>
    </Div>
  )
};

export default ArticleInfo;
