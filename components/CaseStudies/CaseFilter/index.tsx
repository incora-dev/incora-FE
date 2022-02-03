import { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  GetCaseStudies_industries_data,
} from "../../../graphql/caseStudies/__generated__/GetCaseStudies";
import { useIsMobile } from "../../../services/hooks";
import { theme } from "../../../styles/theme";
import Globe from "../../common/Globe";
import { getReview } from "../../Homepage/actions";
import Switch from "./components/Switch";
import Tags from "./components/Tags";
import {
  CaseFilterWrapper,
  FilterSwitchWrap,
  FilterWrap,
  GlobeWrap,
  GlobeContainer,
} from "./style";

interface ICaseFilter {
  filterByFlag: boolean;
  setFilterByFlag: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string | null;
  setCurrentIndustryTag: Dispatch<SetStateAction<string>>;
  industries: GetCaseStudies_industries_data[];
}

const CaseFilter = ({
  filterByFlag,
  setFilterByFlag,
  title,
  description,
  setCurrentIndustryTag,
  industries,
}: ICaseFilter) => {
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

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

  const tagsCondition = !filterByFlag && industries && (
    <Tags setCurrentIndustryTag={setCurrentIndustryTag} labels={industries} />
  );

  const globeCondition = <Globe reviewIndex={0} />;

  return (
    <CaseFilterWrapper filterByFlag={filterByFlag}>
      <FilterWrap filterByFlag={filterByFlag}>
        <h1>{title}</h1>
        <p>{description}</p>
        {!isMobile && !isTablet && !isSmallTablet && (
          <FilterSwitchWrap filterByFlag={filterByFlag}>
            <span>filter by</span>
            <Switch
              left={"industries"}
              right={"countries"}
              backgroundColor={switchBackgroundColorCondition}
              handleValue={handleSwitchValue}
            />
          </FilterSwitchWrap>
        )}
        {tagsCondition}
      </FilterWrap>
      <GlobeContainer>
        <div className={`globe ${filterByFlag && !isMobile && "show"}`}>
          <GlobeWrap>{globeCondition}</GlobeWrap>
        </div>
      </GlobeContainer>
    </CaseFilterWrapper>
  );
};

export default CaseFilter;
