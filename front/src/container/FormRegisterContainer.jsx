import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Register from "../components/Register";
import MuiAlert from "@material-ui/lab/Alert";

const RegisterContainer = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [registerOk, setRegisterOk] = useState(false);

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

  const handleRegister = () => {
    setRegisterOk(true);
  };

  const handleChange = (e) => {
    if (e.target.name === "nombre") setNombre(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
    if (e.target.name === "apellido") setApellido(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", { nombre, apellido, password, email })
      .then((user) => {
        console.log(user.data);
        if (user.data._id) {
          handleRegister();
        }
      })
      .then(() => {
        setTimeout(() => history.push("/login"), 2000);
      })
      .catch(() => handleClick());
  };

  return (
    <Register
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      Alert={Alert}
      open={open}
      handleClose={handleClose}
      handleRegister={handleRegister}
      registerOk={registerOk}
    />
  );
};

export default RegisterContainer;
