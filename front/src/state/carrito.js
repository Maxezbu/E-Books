import { createReducer, createAction } from "@reduxjs/toolkit";

export const setCarrito = createAction("SET_CARRITO");
export const addCarrito = createAction("ADD_CARRITO");

export const carritoReducer = createReducer([], {
  [setCarrito]: (state, action) => action.payload,
  [addCarrito]: (state, action) => [...state, action.payload],
});
