import { IStacks } from "../../interfaces/servicesComponent.interface";
import { AppState } from "../../services/store";

export const filterByFlagSelector = (state: AppState): boolean =>
  state.caseStudiesReducer.filterByFlag;

export const filterTagsSelector = (state: AppState): string[] => {
  return state.caseStudiesReducer.filterTags;
};
