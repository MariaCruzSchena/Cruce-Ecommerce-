import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFilter= createAction("SET_FILTER");
export const setQuery = createAction("SET_QUERY");
export const setArray = createAction("SET_ARRAY");

const reducer = createReducer({}, {
  [setFilter]: (state, action) =>{ state.filter = action.payload},
  [setQuery]: (state, action) => {state.query = action.payload},
  [setArray]: (state, action) => {state.array = action.payload},
});

export default reducer;