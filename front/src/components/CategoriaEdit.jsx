import { Grid, Snackbar, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setCategorias } from "../state/categorias";
import MuiAlert from "@material-ui/lab/Alert";

export default function CategoriaEdit({ id }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [categoria, setCategoria] = useState("");
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/admin/categoria/${id}`)
      .then(({ data }) => setCategoria(data.name));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    axios
      .post(`/api/admin/categoria/edit/${id}`, { name: input })
      .then((categoria) => dispatch(setCategorias(categoria)))
      .then(() => setInput(""))
      .then(() => history.push("/admin/categorias"));
  };

  return (
    <div>
      <Typography variant="h4" style={{ margin: 20 }}>
        Modificá la categoria
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} sm={6} style={{ marginTop: 50 }}>
          <TextField
            autoComplete="fname"
            name="titulo"
            variant="outlined"
            fullWidth
            id="firstName"
            label={categoria}
            autoFocus
            value={input}
            onChange={handleChange}
          />
        </Grid>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        style={{ fontSize: 20 }}
      >
        <Alert onClose={handleClose} severity="success">
          <Typography style={{ fontSize: 18 }}>
            Editaste la categoría
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}
