import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setBooks = createAsyncThunk("SET_BOOKS", () => {
  return axios.get("/api/products").then((res) => res.data);
});

export const booksReducer = createReducer([], {
  [setBooks.fulfilled]: (state, action) => action.payload,
});
