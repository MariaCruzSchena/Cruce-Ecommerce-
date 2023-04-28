import { createAction, createReducer } from "@reduxjs/toolkit";

export const setRecommended = createAction("SET_RECOMMENDED");

const reducer = createReducer([], {
  [setRecommended]: (state, action) => action.payload,
});

export default reducer;