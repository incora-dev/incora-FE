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
  CodeBlock,
  Icons,
  SocialIcons,
} from "./ArticleInfo.style";
import React, { useCallback, useEffect, useState } from "react";
import Technologies from "../../Homepage/EmbodiedIdeas/Projects/Technologies";
import LoveItIcon from "../../../public/SVG/LoveIt.svg";
import ValuableIcon from "../../../public/SVG/Valuable.svg";
import ExcitingIcon from "../../../public/SVG/Exciting.svg";
import UnsatisfiedIcon from "../../../public/SVG/Unsatisfied.svg";
import ReactMarkdown from "react-markdown";
import { GetArticle_articles_data_attributes_tags_data } from "../../../graphql/insights/__generated__/GetArticle";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import FacebookSVG from "../../../public/SVG/socialNetwork/FacebookSVG.svg";
import LinkedInSvg from "../../../public/SVG/socialNetwork/LinkedInSvg.svg";
import TwitterSVG from "../../../public/SVG/socialNetwork/TwitterSVG.svg";
import { useMutation } from "@apollo/client";
import { UPDATE_IMPRESSIONS_COUNT } from "../../../graphql/insights/mutations";
import { UpdateImpressionsCount } from "../../../graphql/insights/__generated__/UpdateImpressionsCount";
import { IImpressions } from "../../../pages/insights/[articleTemplate]";

interface IArticleInfo {
  facebook: string | null | undefined;
  linkedIn: string | null | undefined;
  mainText: string;
  tags: GetArticle_articles_data_attributes_tags_data[];
  impressions: IImpressions;
  id: string;
}

interface ISocialIcons {
  facebook: string | null | undefined;
  linkedIn: string | null | undefined;
}

const pollLabels = ["Love it!", "Valuable", "Exciting", "Unsatisfied"];
const pollIcons = [LoveItIcon, ValuableIcon, ExcitingIcon, UnsatisfiedIcon];

function getScrollLabels(
  elementIndex: number,
  sideBarElements?: NodeListOf<HTMLElement>
) {
  if (!sideBarElements?.length) return;
  return Array.from(sideBarElements).map((el, index) => {
    const selected = elementIndex === index;

    const element = React.createElement(el.tagName, {}, el.innerHTML);

    return (
      <ScrollLabel
        key={index}
        onClick={() => window.scrollTo(0, el?.offsetTop - 104)}
      >
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

function GetSocialIcons({ facebook, linkedIn }: ISocialIcons) {
  return (
    <Icons>
      {facebook && (
        <FacebookShareButton url={facebook}>
          <FacebookSVG />
        </FacebookShareButton>
      )}

      {linkedIn && (
        <LinkedinShareButton url={linkedIn}>
          <LinkedInSvg />
        </LinkedinShareButton>
      )}
    </Icons>
  );
}

const ArticleInfo = ({
  mainText,
  tags,
  impressions,
  id,
  facebook,
  linkedIn,
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
  const [sideBarRowGap, setSideRowGap] = useState("25px;");

  const scrollTitles = getScrollLabels(selectedElementIndex, sideBarElements);

  const elements = getElements(
    pollLabels,
    selected,
    setSelect,
    onImpressionClick
  );

  function getSideBarElements() {
    const sideBarList = document.querySelectorAll(
      "#scrollsLabels h2, #scrollsLabels h3, #scrollsLabels h4, #scrollsLabels h5, #scrollsLabels h6"
    );
    const querySelectorAll =
      "#scrollsLabels h2, #scrollsLabels h3, #scrollsLabels h4, #scrollsLabels h5, #scrollsLabels h6";
    const querySelectorThan15 = "#scrollsLabels h2";

    sideBarList.length > 15
      ? setSideBarElements(document.querySelectorAll(querySelectorThan15))
      : setSideBarElements(document.querySelectorAll(querySelectorAll));
  }

  const handleScroll = useCallback(() => {
    sideBarElements?.forEach((el, index) => {
      if (
        el.getBoundingClientRect().top > 70 &&
        el.getBoundingClientRect().top < 200
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

    sideBarElements && sideBarElements?.length > 10
      ? setSideRowGap("15px;")
      : setSideRowGap("25px;");

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    getSideBarElements();

    console.log(<ReactMarkdown>{mainText}</ReactMarkdown>);
  }, []);

  return (
    <Div>
      <Wrapper>
        <StickyWrapper>
          <ScrollLabels rowGap={sideBarRowGap}>{scrollTitles}</ScrollLabels>
        </StickyWrapper>

        <MainText id={"scrollsLabels"}>
          <ReactMarkdown>{mainText}</ReactMarkdown>

          <LineRetreat />
        </MainText>

        <StickyWrapper>
          <SocialTitleAndTagsBlock>
            <SocialTitle>
              {facebook || (linkedIn && <P>Social title</P>)}

              <SocialIcons>
                <GetSocialIcons facebook={facebook} linkedIn={linkedIn} />
              </SocialIcons>
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
