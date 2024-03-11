export function searchReducer(state, action) {
  if (action.type === "keyword") {
    return { ...state, keyword: action.keyword };
  } else if (action.type === "sort") {
    return { ...state, sort: action.sort };
  } else if (action.type === "reset") {
    return { ...state, keyword: null, sort: null };
  }
}
