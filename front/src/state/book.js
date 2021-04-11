import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setBook = createAsyncThunk("SET_BOOK", (id) => {
  return axios.get(`/api/products/${id}`).then((res) => res.data);
});

export const bookReducer = createReducer([], {
  [setBook.fulfilled]: (state, action) => action.payload,
});
