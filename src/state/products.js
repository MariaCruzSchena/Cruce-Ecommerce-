import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");

const reducer = createReducer([], {
  [setProducts]: (state, action) => action.payload,
});

export default reducer;
