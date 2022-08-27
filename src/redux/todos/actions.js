import {
  LOADED,
  ADDED,
  COLOR_SELECTED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  TOGGLED,
  DELETED,
} from "./actionTypes";

export const loaded = (todoText) => {
  return {
    type: LOADED,
    payload: todoText,
  };
};

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = (id) => {
  return {
    type: TOGGLED,
    payload: id,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allCompleted = (todoId) => {
  return {
    type: ALL_COMPLETED,
  };
};

export const clearCompleted = (todoId) => {
  return {
    type: CLEAR_COMPLETED,
  };
};
