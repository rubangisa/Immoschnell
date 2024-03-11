
export function bookingReducer(state, action) {
  if (action.type === "create") {
    return { ...state, booking: action.booking , error:"" };
  } else if (action.type === "reset") {
    return { ...state, booking: null, error: "" };
  } else if (action.type === "error") {
    return { ...state, error: action.error, booking:null };
  }
}
