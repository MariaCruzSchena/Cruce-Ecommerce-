import { createAction, createReducer } from "@reduxjs/toolkit";

export const setNew = createAction("SET_NEW");

const reducer = createReducer([], {
  [setNew]: (state, action) => action.payload,
});

export default reducer;