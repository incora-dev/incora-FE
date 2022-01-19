interface IReducerMap {
  [key: string]: (...args: any[]) => void;
}

const isLoadingReducer = (state: any) => ({
  ...state,
  error: null,
  loading: true,
});

const successReducer = (state: any) => ({
  ...state,
  error: null,
  loading: false,
});

const errorReducer = (state: any, action: any) => ({
  ...state,
  error: action.payload,
  loading: false,
});

const noopReducer = (state: any) => state;

export const withLoadable = <T = any>(actionTypes: string[]) => {
  const actionReducerMap: IReducerMap = actionTypes.reduce(
    (acum, item) => ({
      ...acum,
      [item]: isLoadingReducer,
      [`${item}_SUCCESS`]: successReducer,
      [`${item}_FAILURE`]: errorReducer,
    }),
    {}
  );

  return (baseReducer: (...args: any[]) => T) => (state: any, action: any) => {
    const reducerFunction = actionReducerMap[action.type] || noopReducer;
    const newState = reducerFunction(state, action);
    return baseReducer(newState, action);
  };
};
