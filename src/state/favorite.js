import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFavorite = createAction("SET_FAVORITE");

const reducer = createReducer({}, {
  [setFavorite]: (state, action) => action.payload,
});

export default reducer;