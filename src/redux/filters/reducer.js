import { STATUS_CHANGED, COLOR_CHANGED } from "./actionTypes";
import initialState from "./initalState";
const reducer = (state = initialState, action) => {
  console.log("st", state);

  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLOR_CHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((existingColor) => {
              return existingColor !== color;
            }),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default reducer;
