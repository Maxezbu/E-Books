import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { useHistory } from "react-router-dom";

import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  Button,
  ButtonGroup,
  Dialog,
  ListItemText,
  ListItem,
  List,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
} from "@material-ui/core";

import { setBook } from "../state/book";
import { setCarritoLogin } from "../state/comprar";

import CloseIcon from "@material-ui/icons/Close";

import { addCarrito } from "../state/carrito";
import useStyles from "../utils/stylesSingleCard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SingleCard({ id }) {
  const [reviews, setReviews] = useState();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    axios.get(`/api/review/${id}`).then(({ data }) => setReviews(data));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setBook(id));
  //   localStorage.setItem("book", JSON.stringify(carrito));
  // }, [carrito]);

  // const handleClick = (libro) => {
  //   dispatch(setCarrito(libro));
  //   let carritoCompras = libro;
  //   let userId = localStorage.getItem("userId");
  //   dispatch(setCarritoLogin({ userId, carritoCompras }));
  // };

  const libro = useSelector((store) => store.book);
  const carrito = useSelector((store) => store.carrito);

  useEffect(() => {
    dispatch(setBook(id));
    localStorage.setItem("book", JSON.stringify(carrito));
  }, [carrito]);

  const handleClick = (librito /* libritoId */) => {
    dispatch(addCarrito(librito));
    let productos = [{ producto: librito, cantidad: 1 }];
    let userId = localStorage.getItem("userId");
    dispatch(setCarritoLogin({ userId, productos }));
  };

  return (
    <>
      <div className={classes.root}>
        <div style={{ marginTop: 50 }}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h3" align="center">
              {libro.titulo}
            </Typography>
            <Grid container>
              <Grid container style={{ width: 500 }} justify="space-around">
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={libro.imagen}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      {libro.reseqna}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Autor: {libro.autor}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      $ {libro.precio}
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                      Categoria:
                      {(libro.categoria && libro.categoria.name) ||
                        " Sin categoría"}
                    </Typography>
                  </Grid>

                  <ButtonGroup
                    variant="text"
                    color="primary"
                    aria-label="text primary button group"
                  >
                    <Button onClick={() => handleClick(libro /*, libro._id */)}>
                      Agregar a carrito
                    </Button>
                    <Button
                      onClick={() => history.push(`/singlecard/${id}/review`)}
                    >
                      Agregar review
                    </Button>
                    <Button onClick={handleClickOpen}>ver reviews</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Reviews
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {reviews &&
            reviews.map((review, i) => (
              <ListItem button>
                <ListItemText
                  primary={review.texto}
                  secondary={review.user.nombre}
                />
              </ListItem>
            ))}
        </List>
      </Dialog>
    </>
  );
}
