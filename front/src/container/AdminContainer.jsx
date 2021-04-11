import React, { useEffect } from "react";
import AdminUsers from "../components/AdminUsers";
import AdminBooks from "../components/AdminBooks";
import { AdminCategorias } from "../components/AdminCategorias";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../state/users";
import { useLocation } from "react-router";
import { setBooks } from "../state/books";
import { setCategorias } from "../state/categorias";

export default function AdminContainer() {
  const users = useSelector((state) => state.users);
  const books = useSelector((state) => state.books);
  const categorias = useSelector((state) => state.categorias);
  const isAdmin = localStorage.getItem("isAdmin");
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(setUsers());
    dispatch(setBooks());
    dispatch(setCategorias());
  }, []);

  return (
    <>
      {isAdmin === "true" ? (
        <>
          {location.pathname === "/admin/users" ? (
            <AdminUsers users={users} />
          ) : null}
          ,
          {location.pathname === "/admin/categorias" ? (
            <AdminCategorias categorias={categorias} />
          ) : null}
          ,
          {location.pathname === "/admin/products" ? (
            <AdminBooks books={books} />
          ) : null}
        </>
      ) : (
        <h3> ERROR DE AUTORIZACIÓN </h3>
      )}
    </>
  );
}
