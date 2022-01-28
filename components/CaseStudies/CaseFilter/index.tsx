import { useQuery } from "@apollo/client";
import themeGet from "@styled-system/theme-get";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_INDUSTRIES_NAMES } from "../../../graphql/caseStudies/queries";
import {
  GetCaseStudies_caseStudiesPage,
  GetCaseStudies_caseStudiesPage_data_attributes,
} from "../../../graphql/caseStudies/__generated__/GetCaseStudies";
import { GetIndustriesNames } from "../../../graphql/caseStudies/__generated__/GetIndustriesNames";
import { IStacks } from "../../../interfaces/servicesComponent.interface";
import { theme } from "../../../styles/theme";
import Globe from "../../common/Globe";
import { getReview } from "../../Homepage/actions";
import { toggleFilterBy } from "../actions";
import { filterByFlagSelector, filterTagsSelector } from "../selectors";
import Switch from "./components/Switch";
import Tags from "./components/Tags";
import {
  CaseFilterWrapper,
  FilterSwitchWrap,
  FilterWrap,
  GlobeWrap,
} from "./style";

interface ICaseFilter {
  filterByFlag: boolean;
  setFilterByFlag: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string | null;
  setCurrentIndustryTag: Dispatch<SetStateAction<string>>;
}

const CaseFilter = ({
  filterByFlag,
  setFilterByFlag,
  title,
  description,
  setCurrentIndustryTag,
}: ICaseFilter) => {
  const { data, loading } = useQuery<GetIndustriesNames>(GET_INDUSTRIES_NAMES);
  const industriesEntry = data?.industries?.data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReview.success()); // replace real backend data later
  }, []);

  const handleSwitchValue = (value: boolean) => {
    setFilterByFlag(value);
  };

  const switchBackgroundColorCondition = filterByFlag
    ? theme.colors.background2
    : undefined;

  const tagsCondition = !filterByFlag && industriesEntry && (
    <Tags setCurrentIndustryTag={setCurrentIndustryTag} labels={industriesEntry} />
  );

  const globeCondition = filterByFlag && <Globe reviewIndex={0} />;

  return (
    <CaseFilterWrapper filterByFlag={filterByFlag}>
      <FilterWrap filterByFlag={filterByFlag}>
        <h1>{title}</h1>
        <p>{description}</p>
        <FilterSwitchWrap filterByFlag={filterByFlag}>
          <span>filter by</span>
          <Switch
            left={"industries"}
            right={"countries"}
            backgroundColor={switchBackgroundColorCondition}
            handleValue={handleSwitchValue}
          />
        </FilterSwitchWrap>
        {tagsCondition}
      </FilterWrap>

      <GlobeWrap>{globeCondition}</GlobeWrap>
    </CaseFilterWrapper>
  );
};

export default CaseFilter;
