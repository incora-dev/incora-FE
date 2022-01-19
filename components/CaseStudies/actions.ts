import * as ActionInterfaces from "./interfaces";

export const TOGGLE_FILTER_BY = "TOGGLE_FILTER_BY";

export const toggleFilterBy = (value: boolean): ActionInterfaces.ToggleFilterBy => ({
  type: TOGGLE_FILTER_BY,
  value,
});
