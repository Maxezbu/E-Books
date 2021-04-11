import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/* 
export const setComprar = createAsyncThunk("SET_COMPRAR", (userId, productos) => {

   return axios.put(`/api/carrito/${userId}`, {productos}).then((res) => res.data); 
}); */

export const setCarritoLogin = createAsyncThunk("SET_CARRITO_LOGIN", ({userId, productos}) => {
      console.log(productos)
    return axios.post(`/api/carrito/${userId}`, {productos}).then((res) => res.data);
  });

export const comprarReducer = createReducer([], {
/*   [setComprar.fulfilled]: (state, action) => action.payload, */
  [setCarritoLogin.fulfilled]: (state, action) => action.payload,
});
