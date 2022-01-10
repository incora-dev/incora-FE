export const createApiAction = (type: string) => ({
  request: (payload?: unknown) => ({ type, payload }),
  success: (payload?: unknown) => ({ type: `${type}_SUCCESS`, payload }),
  failure: (error?: unknown) => ({ type: `${type}_FAILURE`, error }),
});
