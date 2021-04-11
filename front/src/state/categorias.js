import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setCategorias = createAsyncThunk("SET_CATEGORIAS", () => {
  return axios.get("/api/categorias").then((res) => res.data);
});

export const categoriasReducer = createReducer([], {
  [setCategorias.fulfilled]: (state, action) => action.payload,
});
