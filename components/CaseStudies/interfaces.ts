import { IStacks } from "../../interfaces/servicesComponent.interface";
import * as Action from "./actions";

export interface CaseStudiesState {
  filterTags: string[];
  filterByFlag: boolean;
  loading: boolean;
  error: Error | null;
}

export interface ToggleFilterBy {
  type: typeof Action.TOGGLE_FILTER_BY;
  value: boolean;
}

export type CaseStudiesActions = ToggleFilterBy;
