import { createAction, createReducer } from "@reduxjs/toolkit";

export const setList= createAction("SET_LIST");

const reducer = createReducer({}, {
  [setList]: (state, action) => action.payload,
});

export default reducer;