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
  PositionLoaderSemiCircle,
} from "./HeaderInsights.style";
import MagnifyingGlass from "../../../public/SVG/magnifyingGlass.svg";
import Tags from "../../CaseStudies/CaseFilter/components/Tags";
import { useSelector } from "react-redux";
import { filterTagsSelector } from "../../CaseStudies/selectors";
import Posts from "../Posts";
import React from "../../../public/SVG/technologies/react.svg";
import Loader from "../../../public/loading2.svg";
import LoaderSemiCircle from "../../../public/loading1.svg";
import { GetInsightsPage_industries_data } from "../../../graphql/insights/__generated__/GetInsightsPage";
import { Dispatch, SetStateAction, useState } from "react";

interface IHeaderInsights {
  title: string;
  text: string;
  inputPlaceholder: string;
  industries: GetInsightsPage_industries_data[];
}

const HeaderInsights = ({
  title,
  text,
  inputPlaceholder,
  industries,
}: IHeaderInsights) => {
  const [query, setQuery] = useState<string>();
  const [currentIndustryTag, setCurrentIndustryTag] = useState<string>("all");

  const onKeyPress = (event: any) => {
    if (event.key === "Enter") {
      setQuery(event.target.value);
    }
  };

  return (
    <Div>
      <PositionLoader>
        <Loader width={181.74} height={180.99} viewBox="0 0 54 54" />
      </PositionLoader>

      <PositionLoaderSemiCircle>
        <LoaderSemiCircle width={91.36} height={91.36} viewBox="0 0 96 96" />
      </PositionLoaderSemiCircle>
      <Wrapper>
        <TextBlock>
          <H1>{title}</H1>
          <Text>{text}</Text>
        </TextBlock>
        <SearchBlock>
          <Search
            onKeyPress={onKeyPress}
            type={"text"}
            placeholder={inputPlaceholder}
          />
          <MagnifyingGlass />
        </SearchBlock>
        <PositionTags>
          <Tags
            labels={industries}
            setCurrentIndustryTag={setCurrentIndustryTag}
          />
        </PositionTags>
      </Wrapper>
      <Posts query={query} industry={currentIndustryTag} />
    </Div>
  );
};

export default HeaderInsights;
