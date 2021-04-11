import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setUsers = createAsyncThunk("SET_USERS", () => {
  return axios.get("/api/admin/users").then((res) => res.data);
});

export const usersReducer = createReducer([], {
  [setUsers.fulfilled]: (state, action) => action.payload,
});
