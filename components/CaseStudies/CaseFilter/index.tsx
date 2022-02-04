import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  GetCaseStudies_industries_data,
  GetCaseStudies_locations_data,
} from "../../../graphql/caseStudies/__generated__/GetCaseStudies";
import { useIsMobile } from "../../../services/hooks";
import { theme } from "../../../styles/theme";
import Globe, { Point } from "../../common/Globe";
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
  locations: GetCaseStudies_locations_data[];
}

const CaseFilter = ({
  filterByFlag,
  setFilterByFlag,
  title,
  description,
  setCurrentIndustryTag,
  industries,
  locations,
}: ICaseFilter) => {
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();
  let points = useRef<Point[]>();

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

  useEffect(() => {
    points.current = locations.map((location, index) => {
      const coord = location.attributes?.location;
      const country = location.attributes?.country;
      const lat = coord?.lat;
      const lng = coord?.lng;
      const size = index === 0 ? 0.06 : 0.03;
      const radius = index === 0 ? 1 : 0.6;

      return {
        lat,
        lng,
        size,
        radius,
        country,
      };
    });
  });

  const globeCondition = points.current && (
    <Globe reviewIndex={0} points={points.current} />
  );

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
