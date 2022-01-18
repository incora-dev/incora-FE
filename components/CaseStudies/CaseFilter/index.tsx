import themeGet from "@styled-system/theme-get";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const CaseFilter = () => {
  const dispatch = useDispatch();

  const filterByFlag: boolean = useSelector(filterByFlagSelector);
  const filterTags: string[] = useSelector(filterTagsSelector);

  useEffect(() => {
    dispatch(getReview.success()); // replace real backend data later
  }, []);

  const handleSwitchValue = (value: boolean) => {
    dispatch(toggleFilterBy(value));
  };

  const switchBackgroundColorCondition = filterByFlag
    ? theme.colors.background2
    : undefined;

  const tagsCondition = !filterByFlag && <Tags labels={filterTags} />;

  const globeCondition = filterByFlag && <Globe reviewIndex={0} />;

  return (
    <CaseFilterWrapper filterByFlag={filterByFlag}>
      <FilterWrap filterByFlag={filterByFlag}>
        <h1>Case Studies</h1>
        <p>
          Explore how our bold solutions attained the furthest corners of the
          earth, delivering proven expertise in various complex projects.
        </p>
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
