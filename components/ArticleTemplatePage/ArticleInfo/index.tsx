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
  ElementTitle,
  SocialTitle,
  SocialIcons,
  CodeBlock
} from "./ArticleInfo.style";
import React, { useCallback, useEffect, useState} from "react";
import Technologies from "../../Homepage/EmbodiedIdeas/Projects/Technologies";
import LoveItIcon from "../../../public/SVG/LoveIt.svg";
import ValuableIcon from "../../../public/SVG/Valuable.svg";
import ExcitingIcon from "../../../public/SVG/Exciting.svg";
import UnsatisfiedIcon from "../../../public/SVG/Unsatisfied.svg";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

interface IArticleInfo {
  mainText: any;
  codeText: string;
  socialTitles: ISocialTitles[];
  tags: string[];
}

interface ISocialTitles {
  Icon: React.FunctionComponent;
  href: string;
}

const pollTitle = 'What’s your impression after reading this article?';
const pollLabels = ['Love it!', 'Valuable', 'Exciting', 'Unsatisfied'];
const pollIcons = [LoveItIcon, ValuableIcon, ExcitingIcon, UnsatisfiedIcon];

function getScrollLabels(elementIndex: number, sideBarElements?: NodeListOf<Element>) {
  if (!sideBarElements?.length) return;
  return (Array.from(sideBarElements).map((el, index) => {
    const selected = elementIndex === index;

    const element = React.createElement(el.tagName, {}, el.innerHTML);

    return (
      <ScrollLabel key={index}>
        <Line selected={selected}/>
        <Label selected={selected}>{element}</Label>
      </ScrollLabel>
    )
  }))
};

function getElements(labels: string[], selected: number, setSelect: Function) {
  return (
    labels.map((label, index) => {
      const shouldSelect = selected === index;
      const Icon = pollIcons[index];

      return (
        <Element
          key={index}
          onClick={() => setSelect(index)}
          selected={shouldSelect}
        >
          <Icon/>
          <ElementTitle>{label}</ElementTitle>
        </Element>
      )
    })
  )
};

function getSocialIcons(icons: ISocialTitles[]) {
  return (
    icons.map(({ Icon, href }, index) =>
      <Link key={index} href={`https://${href}`}>
        <a>
          <Icon />
        </a>
      </Link>

  ))
}

const ArticleInfo = ({ mainText, socialTitles, tags, codeText }: IArticleInfo) => {
  const [selectedElementIndex, setElementIndex] = useState(0);
  const [sideBarElements, setSideBarElements] = useState<NodeListOf<HTMLElement>>();
  const [selected, setSelect] = useState(-1);

  const scrollTitles = getScrollLabels(selectedElementIndex, sideBarElements);
  const elements = getElements(pollLabels, selected, setSelect);
  const icons = getSocialIcons(socialTitles);

  const handleScroll = useCallback(() => {
    sideBarElements?.forEach((el, index) => {
      if (el.getBoundingClientRect().top > 120 && el.getBoundingClientRect().top < 500) {
        setElementIndex(index);
      }

      if (window.scrollY <= 100 ) {
        setElementIndex(0);
      }
    })
  }, [sideBarElements])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setSideBarElements(document.querySelectorAll('#scrollsLabels h1,#scrollsLabels h2, #scrollsLabels h3, #scrollsLabels h4, #scrollsLabels h5, #scrollsLabels h6'));
  }, []);

  return (
    <Div>
      <Wrapper>
        <StickyWrapper>
          <ScrollLabels>
            {scrollTitles}
          </ScrollLabels>
        </StickyWrapper>

        <MainText id={'scrollsLabels'}>
          {mainText}

          <CodeBlock>
            <CopyBlock
              language="js"
              text={codeText}
              codeBlock
              theme={dracula}
              showLineNumbers={true}
            />
          </CodeBlock>

          <LineRetreat/>
        </MainText>

        <StickyWrapper>
          <SocialTitleAndTagsBlock>
            <SocialTitle>
              <P>Social title</P>

              <SocialIcons>
                {icons}
              </SocialIcons>
            </SocialTitle>
            <Tags>
              <P>Tags</P>

              <Technologies technologies={tags}/>
            </Tags>
          </SocialTitleAndTagsBlock>
        </StickyWrapper>
      </Wrapper>

      <PollBlock>
        <PollTitle>{pollTitle}</PollTitle>

        <ChooseElements>{elements}</ChooseElements>
      </PollBlock>
    </Div>
  )
};

export default ArticleInfo;
