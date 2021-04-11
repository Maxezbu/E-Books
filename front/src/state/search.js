import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setSearch = createAsyncThunk("SET_SEARCH", (title) => {
  return axios.get(`/api/products/search/${title}`).then((res) => res.data);
});

export const setSearchCategory = createAsyncThunk(
  "SET_SEARCH_CATEGORY",
  (booksSearch) => {
    return axios
      .get(`/api/products/?categoria=${booksSearch}`)
      .then((res) => res.data);
  }
);

export const searchReducer = createReducer([], {
  [setSearch.fulfilled]: (state, action) => action.payload,
  [setSearch.rejected]: (state, action) => state,
  [setSearchCategory.fulfilled]: (state, action) => action.payload,
  [setSearchCategory.rejected]: (state, action) => state,
});
