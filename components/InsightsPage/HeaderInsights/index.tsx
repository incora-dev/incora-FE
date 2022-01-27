import {
  Div,
  Wrapper,
  TextBlock,
  H1,
  Text,
  Search,
  SearchBlock,
  PositionTags,
  PositionLoader,
  PositionLoaderSemiCircle
} from "./HeaderInsights.style";
import MagnifyingGlass from "../../../public/SVG/magnifyingGlass.svg"
import Tags from "../../CaseStudies/CaseFilter/components/Tags";
import { useSelector } from "react-redux";
import { filterTagsSelector } from "../../CaseStudies/selectors";
import Posts from "../Posts";
import React from "../../../public/SVG/technologies/react.svg";
import Loader from "../../../public/loading2.svg";
import LoaderSemiCircle from "../../../public/loading1.svg";

interface IHeaderInsights {
  title: string;
  text: string;
  inputPlaceholder: string;
  news: any;
}

const HeaderInsights = ({ title, text, inputPlaceholder, news }: IHeaderInsights) => {
  // const filterTags: string[] = useSelector(filterTagsSelector);
  const filterTags: string[] = [
    "all",
    "real estate",
    "e-learning",
    "e-commerce",
    "food industry",
    "health and wellness",
    "task management",
    "process management",
    "recruitment",
    "screening",
    "recruitment",
    "keyword research",
    "food industry",
    "environment",
  ];

  return (
    <Div>
      <PositionLoader>
        <Loader
          width={181.74}
          height={180.99}
          viewBox="0 0 54 54"
        />
      </PositionLoader>

      <PositionLoaderSemiCircle>
        <LoaderSemiCircle
          width={91.36}
          height={91.36}
          viewBox="0 0 96 96"
        />
      </PositionLoaderSemiCircle>
      <Wrapper>
        <TextBlock>
          <H1>{title}</H1>
          <Text>{text}</Text>
        </TextBlock>
        <SearchBlock>
          <Search
            type={"text"}
            placeholder={inputPlaceholder}
          />
          <MagnifyingGlass/>
        </SearchBlock>
        <PositionTags>
          <Tags labels={filterTags} />
        </PositionTags>
      </Wrapper>
      <Posts news={news}/>
    </Div>
  )
}

export default HeaderInsights;
