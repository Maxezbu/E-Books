import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  Box,
  Typography,
  Snackbar,
} from "@material-ui/core";
/* import Alert from "@material-ui/lab/Alert"; */

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "../utils/stylesLogin";
import { Link } from "react-router-dom";

/* function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://plataforma5.la/" target="_blank">
        Plataforma5
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
} */

export default function Login({
  handleSubmit,
  handleChange,
  handleClose,
  open,
  Alert,
}) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth
              name="password"
              label="contaseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2" style={{ color: "#0B73D4" }}>
                  Ingresar sin loguearme
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/register"
                  variant="body2"
                  style={{ color: "#0B73D4" }}
                >
                  No tenes una cuenta, Registrate
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>{/*  <Copyright /> */}</Box>
          </form>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          style={{ padding: 50 }}
        >
          <Alert onClose={handleClose} severity="info">
            <Typography style={{ fontSize: 22 }}>
              Datos incorrectos, intenta de nuevo
            </Typography>
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
}
