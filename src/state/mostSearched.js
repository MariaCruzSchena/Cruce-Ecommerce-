import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMostSearched = createAction("SET_MOST_SEARCHED");

const reducer = createReducer([], {
  [setMostSearched]: (state, action) => action.payload,
});

export default reducer;