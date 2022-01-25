import themeGet from "@styled-system/theme-get";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCaseStudies_caseStudiesPage,
  GetCaseStudies_caseStudiesPage_data_attributes,
} from "../../../graphql/caseStudies/__generated__/GetCaseStudies";
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
}

const CaseFilter = ({
  filterByFlag,
  setFilterByFlag,
  title,
  description,
}: ICaseFilter) => {
  const dispatch = useDispatch();

  const filterTags: string[] = useSelector(filterTagsSelector);

  useEffect(() => {
    dispatch(getReview.success()); // replace real backend data later
  }, []);

  const handleSwitchValue = (value: boolean) => {
    setFilterByFlag(value);
  };

  const switchBackgroundColorCondition = filterByFlag
    ? theme.colors.background2
    : undefined;

  const tagsCondition = !filterByFlag && <Tags labels={filterTags} />;

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
