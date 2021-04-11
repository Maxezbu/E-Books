import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("USER");

export const userReducer = createReducer([], {
  [setUser]: (state, action) => action.payload,
});
