import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  Snackbar,
} from "@material-ui/core";

import { setBook } from "../state/book";
import { useSelector, useDispatch } from "react-redux";
import { setCategorias } from "../state/categorias";
import { setBooks } from "../state/books";

import useStyles from "../utils/stylesRegister";
import { useHistory, useLocation } from "react-router";

import MuiAlert from "@material-ui/lab/Alert";

export default function EditContainer({ id, valor }) {
  const param = valor;

  const history = useHistory();
  const book = useSelector((store) => store.book);

  const categorias = useSelector((state) => state.categorias);
  const [selected, setSelected] = useState();
  const [imagen, setImgURL] = useState(book.imagen);
  const [categoria, setCategoria] = useState();
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState({});

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setCategorias());
    dispatch(setBook(id));
  }, [selected]);

  const handleSelected = (name, id) => {
    setSelected(name);
    setCategoria(id);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const action =
    location.pathname === "/admin/product/create"
      ? `/api/admin/products/create`
      : `/api/admin/products/edit/${id}`;

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    return axios
      .post(action, { ...input, categoria: categoria })
      .then((res) => {
        if (res != 400) handleClick();
      })
      .then(() => {
        dispatch(setBooks()).then(() =>
          setTimeout(() => history.push("/admin/products"), 2000)
        );
      })
      .catch(() => alert("Datos inválidos o campos vacíos que son necesarios"));
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Typography variant="h4" style={{ margin: 20 }}>
        {param} un libro
      </Typography>
      <Grid
        container
        spacing={4}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12}>
          <TextField
            name="titulo"
            placeholder="Título"
            variant="outlined"
            fullWidth
            id="firstName"
            label={"Título: " + book && book.titulo}
            autoFocus
            value={input.titulo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            placeholder="Autor"
            fullWidth
            id="lastName"
            label={"Autor: " + book && book.autor}
            name="autor"
            value={input.autor}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            variant="filled"
            className={classes.formControl}
            fullWidth
            autoFocus
          >
            <InputLabel id="demo-simple-select-filled-label">
              {(selected && selected) ||
                (book.categoria && book.categoria.name) ||
                "Categoría"}
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              name="categoria"
              id="demo-simple-select-filled"
              value={selected}
              autoFocus
              /*   onChange={handleChange} */
            >
              {categorias &&
                categorias.map((categ) => {
                  <MenuItem value="" autoFocus>
                    <em>{selected && selected}</em>
                  </MenuItem>;
                  return (
                    <MenuItem
                      value={selected}
                      onClick={() => handleSelected(categ.name, categ._id)}
                    >
                      {categ.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            name="editorial"
            variant="outlined"
            fullWidth
            id="editorial"
            label={"Editorial: " + book && book.editorial}
            placeholder="Editorial"
            autoComplete="email"
            onChange={handleChange}
            value={input.editorial}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="edicion"
            label="Edición"
            variant="outlined"
            fullWidth
            id="edición"
            placeholder={"Edición: "}
            autoComplete="email"
            onChange={handleChange}
            value={input.edicion}
          />
        </Grid>
        <Grid Item xs={12} style={{ padding: 20 }}>
          <TextField
            variant="outlined"
            placeholder={"Reseña:" + book && book.reseqna}
            fullWidth
            label={"Reseña:"}
            multiline
            rows={6}
            onChange={handleChange}
            name="reseqna"
            value={input.resegna}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="imagen"
            variant="outlined"
            fullWidth
            id="edición"
            label={"Imagen URL: "}
            onChange={handleChange}
            value={input.imagen}
          />
        </Grid>
        <Grid item xs={6} sm={3} justify="center">
          <TextField
            name="precio"
            variant="outlined"
            label={"Precio: $" + book && book.precio}
            placeholder="Precio $:"
            margin="normal"
            id="precio"
            autoComplete="current-password"
            value={input.precio}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6} sm={3} justify="center">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Enviar Info
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        style={{ fontSize: 20 }}
      >
        <Alert onClose={handleClose} severity="success">
          <Typography style={{ fontSize: 18 }}>
            Se {param == "Creá" ? "Creó" : "Editó"} el libro con éxito!
          </Typography>
        </Alert>
      </Snackbar>
    </form>
  );
}
