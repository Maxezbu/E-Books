// STORE CREATION
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { booksReducer } from "./books";
import { bookReducer } from "./book";
import { userReducer } from "./user";
import { carritoReducer } from "./carrito";
import { comprarReducer } from "./comprar";
import { searchReducer } from "./search";
import { usersReducer } from "./users";
import { categoriasReducer } from "./categorias";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    books: booksReducer,
    book: bookReducer,
    users: usersReducer,
    categorias: categoriasReducer,
    carrito: carritoReducer,
    comprar: comprarReducer,
    search: searchReducer,
  },
});

export default store;
