import initialState from "./initialState";
import {
  LOADED,
  ADDED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

const nextTodoID = (todos) => {
  const max = todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId);
  }, -1);
  return max + 1;
};

const reducer = (state = initialState, action) => {
  console.log("initialState", initialState);

  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: nextTodoID(state),
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLED:
      console.log("state", state);

      return state.map((todo) => {
        if (todo.id == action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case COLOR_SELECTED:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color,
        };
      });

    case DELETED:
      return state.filter((todo) => {
        // eslint-disable-next-line no-unused-expressions
        return todo.id !== action.payload;
      });
    case ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEAR_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: false,
        };
      });

    default:
      return state;
  }
};
export default reducer;
