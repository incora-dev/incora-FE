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
  CodeBlock,
} from "./ArticleInfo.style";
import React, { useCallback, useEffect, useState } from "react";
import Technologies from "../../Homepage/EmbodiedIdeas/Projects/Technologies";
import LoveItIcon from "../../../public/SVG/LoveIt.svg";
import ValuableIcon from "../../../public/SVG/Valuable.svg";
import ExcitingIcon from "../../../public/SVG/Exciting.svg";
import UnsatisfiedIcon from "../../../public/SVG/Unsatisfied.svg";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";
import ReactMarkdown from "react-markdown";
import { GetArticle_articles_data_attributes_tags_data } from "../../../graphql/insights/__generated__/GetArticle";
import { useMutation } from "@apollo/client";
import { UPDATE_IMPRESSIONS_COUNT } from "../../../graphql/insights/mutations";
import { UpdateImpressionsCount } from "../../../graphql/insights/__generated__/UpdateImpressionsCount";
import { IImpressions } from "../../../pages/insights/[articleTemplate]";

interface IArticleInfo {
  mainText: string;
  codeText: string;
  socialTitles: ISocialTitles[];
  tags: GetArticle_articles_data_attributes_tags_data[];
  impressions: IImpressions;
  id: string;
}

interface ISocialTitles {
  Icon: React.FunctionComponent;
  href: string;
}

const pollLabels = ["Love it!", "Valuable", "Exciting", "Unsatisfied"];
const pollIcons = [LoveItIcon, ValuableIcon, ExcitingIcon, UnsatisfiedIcon];

function getScrollLabels(
  elementIndex: number,
  sideBarElements?: NodeListOf<Element>
) {
  if (!sideBarElements?.length) return;
  return Array.from(sideBarElements).map((el, index) => {
    const selected = elementIndex === index;

    const element = React.createElement(el.tagName, {}, el.innerHTML);

    return (
      <ScrollLabel key={index}>
        <Line selected={selected} />
        <Label selected={selected}>{element}</Label>
      </ScrollLabel>
    );
  });
}

function getElements(
  labels: string[],
  selected: number,
  setSelect: Function,
  onImpressionClick: Function
) {
  return labels.map((label, index) => {
    const shouldSelect = selected === index;
    const Icon = pollIcons[index];

    return (
      <Element
        key={index}
        onClick={() => {
          setSelect(index);
          onImpressionClick(index);
        }}
        selected={shouldSelect}
      >
        <Icon />
        <ElementTitle>{label}</ElementTitle>
      </Element>
    );
  });
}

function getSocialIcons(icons: ISocialTitles[]) {
  return icons.map(({ Icon, href }, index) => (
    <Link key={index} href={`https://${href}`}>
      <a>
        <Icon />
      </a>
    </Link>
  ));
}

const ArticleInfo = ({
  mainText,
  socialTitles,
  tags,
  codeText,
  impressions,
  id,
}: IArticleInfo) => {
  const [updateImpressionsCount] = useMutation<UpdateImpressionsCount>(
    UPDATE_IMPRESSIONS_COUNT
  );

  const likes = impressions.likes;
  const valuable = impressions.valuable;
  const exciting = impressions.exciting;
  const unsatisfied = impressions.unsatisfied;

  const onImpressionClick = (index: number) => {
    switch (index) {
      case 0:
        updateImpressionsCount({
          variables: {
            id,
            likes: likes + 1,
          },
        });
        break;

      case 1:
        updateImpressionsCount({
          variables: {
            id,
            valuable: valuable + 1,
          },
        });
        break;

      case 2:
        updateImpressionsCount({
          variables: {
            id,
            exciting: exciting + 1,
          },
        });
        break;

      case 3:
        updateImpressionsCount({
          variables: {
            id,
            unsatisfied: unsatisfied + 1,
          },
        });
        break;
    }
  };

  const [selectedElementIndex, setElementIndex] = useState(0);
  const [sideBarElements, setSideBarElements] =
    useState<NodeListOf<HTMLElement>>();
  const [selected, setSelect] = useState(-1);

  const scrollTitles = getScrollLabels(selectedElementIndex, sideBarElements);
  const elements = getElements(
    pollLabels,
    selected,
    setSelect,
    onImpressionClick
  );
  const icons = getSocialIcons(socialTitles);

  const handleScroll = useCallback(() => {
    sideBarElements?.forEach((el, index) => {
      if (
        el.getBoundingClientRect().top > 120 &&
        el.getBoundingClientRect().top < 500
      ) {
        setElementIndex(index);
      }

      if (window.scrollY <= 100) {
        setElementIndex(0);
      }
    });
  }, [sideBarElements]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setSideBarElements(
      document.querySelectorAll(
        "#scrollsLabels h1,#scrollsLabels h2, #scrollsLabels h3, #scrollsLabels h4, #scrollsLabels h5, #scrollsLabels h6"
      )
    );
  }, []);

  return (
    <Div>
      <Wrapper>
        <StickyWrapper>
          <ScrollLabels>{scrollTitles}</ScrollLabels>
        </StickyWrapper>

        <MainText id={"scrollsLabels"}>
          <ReactMarkdown>{mainText}</ReactMarkdown>

          <CodeBlock>
            <CopyBlock
              language="js"
              text={codeText}
              codeBlock
              theme={dracula}
              showLineNumbers={true}
            />
          </CodeBlock>

          <LineRetreat />
        </MainText>

        <StickyWrapper>
          <SocialTitleAndTagsBlock>
            <SocialTitle>
              <P>Social title</P>

              <SocialIcons>{icons}</SocialIcons>
            </SocialTitle>
            <Tags>
              <P>Tags</P>

              <Technologies technologies={tags} />
            </Tags>
          </SocialTitleAndTagsBlock>
        </StickyWrapper>
      </Wrapper>

      <PollBlock>
        <PollTitle>{impressions.intro}</PollTitle>

        <ChooseElements>{elements}</ChooseElements>
      </PollBlock>
    </Div>
  );
};

export default ArticleInfo;
