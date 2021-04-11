import React from "react";
import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  Snackbar,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "../utils/stylesRegister";

export default function Register({
  handleChange,
  handleSubmit,
  handleClose,
  Alert,
  open,
  registerOk,
}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" style={{ paddingTop: 80 }}>
      <CssBaseline />

      <div className={classes.paper}>
        <Grid container xs={10} justify="center" style={{ marginLeft: 25 }}>
          {registerOk ? (
            <Alert
              variant="outlined"
              severity="success"
              style={{ fontSize: 20 }}
            >
              Te has registrado con éxito
            </Alert>
          ) : null}
        </Grid>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrate para ingresar
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                autoComplete="fname"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="apellido"
                autoComplete=""
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar Info
          </Button>
          <Grid container justify="space-between">
            <Grid item>
              <Link to="/" variant="body2" style={{ color: "inherit" }}>
                Ingresar sin registrarme
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login" variant="body2" style={{ color: "inherit" }}>
                Ya tenes cuenta, logueate
              </Link>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          style={{ padding: 50 }}
        >
          <Alert onClose={handleClose} severity="info">
            <Typography style={{ fontSize: 22 }}>
              El email ya existe o tienes datos incorrectos
            </Typography>
          </Alert>
        </Snackbar>
      </div>
    </Container>
  );
}
