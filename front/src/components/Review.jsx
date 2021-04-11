import { Button, Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useStyles from "../utils/stylesRegister";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function Review({ id }) {
  const history = useHistory();
  const [texto, setTexto] = useState("");
  const idUser = localStorage.getItem("id");

  const handleChange = (e) => {
    const review = e.target.value;
    setTexto(review);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/review`, {
        texto,
        product: id,
        user: idUser,
      })
      .then(({ data }) => console.log(data));
    alert("Review creada");
    history.push("/");
  };
  // console.log("USER", user)
  const classes = useStyles();

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
      style={{ marginBottom: 237 }}
    >
      <Typography variant="h4" style={{ margin: 20 }}>
        Agregá una reseña
      </Typography>
      <Grid
        container
        spacing={4}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid Item xs={12} style={{ padding: 20 }}>
          <TextField
            variant="outlined"
            fullWidth
            label={"Reseña:"}
            multiline
            rows={6}
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
        <Grid Item xs={6} sm={3} justify="center">
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
    </form>
  );
}
