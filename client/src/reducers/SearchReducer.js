export function searchReducer(state, action) {
  if (action.type === "keyword") {
    return { ...state, keyword: action.keyword };
  } else if (action.type === "sort") {
    return { ...state, sort: action.sort };
  } else if (action.type === "reset") {
    return { ...state, keyword: null, sort: null , checkIn:null, checkOut:null, guest:null};
  } else if (action.type === "search"){
    return {...state, checkIn:action.checkIn, checkOut:action.checkOut, keyword:action.keyword, guest:action.guest}
  }
}
