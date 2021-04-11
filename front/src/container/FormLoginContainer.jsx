import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setUser } from "../state/user";
import { useDispatch } from "react-redux";
import Login from "../components/Login";

import { setCarritoLogin } from "../state/comprar";
import MuiAlert from "@material-ui/lab/Alert";

const FormLoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    return axios
      .post(`/api/login`, { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user.nombre);
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("isAdmin", res.data.user.isAdmin);
        localStorage.setItem("id", res.data.user._id);
        dispatch(setUser(res.data));

        const userId = localStorage.getItem("userId");
        let productosls = JSON.parse(localStorage.getItem("book"))
          ? JSON.parse(localStorage.getItem("book"))
          : [];

        if (userId) {
          const productos = productosls.map((libro) => ({
            producto: libro._id,
            cantidad: 1,
          }));

          dispatch(setCarritoLogin({ userId, productos }));
        }

        return history.push("/");
      })
      .catch((e) => handleClick());
  };

  return (
    <Login
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Alert={Alert}
      open={open}
      handleClose={handleClose}
    />
  );
};

export default FormLoginContainer;
