import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Tooltip,
  Snackbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { GroupAddSharp, Delete, AccountCircle } from "@material-ui/icons";

import axios from "axios";
import { setUsers } from "../state/users";
import { useStyles } from "../utils/stylesAdminUsers";
import MuiAlert from "@material-ui/lab/Alert";

export default function AdminUsers({ users }) {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const [AdminOk, setAdminOk] = useState(false);
  const [NotAdmin, setNotAdmin] = useState(false);
  const [open, setOpen] = useState(false);

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

  const handleDelete = (id) => {
    setOpen(true);
    axios.delete(`/api/admin/users/${id}`);
    dispatch(setUsers());
  };

  const handleAdmin = (id, admin) => {
    if (admin) {
      setNotAdmin(true);
    } else {
      setAdminOk(true);
    }

    axios
      .put(`/api/admin/users/update/${id}`, { admin })
      .then(() => {
        setTimeout(() => {
          setAdminOk(false);
          setNotAdmin(false);
        }, 2000);
      })
      .then(() => dispatch(setUsers()));
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      style={{ height: "100vh" }}
    >
      <Grid item xs={10} style={{ paddingLeft: 20 }}>
        <Typography variant="h6" className={classes.title}>
          Users
        </Typography>
        {AdminOk ? (
          <Alert variant="outlined" severity="success" style={{ fontSize: 18 }}>
            El usuario pasará a ser Administrador
          </Alert>
        ) : null}
        {NotAdmin ? (
          <Alert variant="outlined" severity="warning" style={{ fontSize: 18 }}>
            El usuario dejará de ser Administrador
          </Alert>
        ) : null}
        <div className={classes.demo}>
          <List>
            {users.map((usuario, i) => (
              <ListItem key={i}>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircle />
                  </Avatar>
                </ListItemAvatar>
                <Tooltip title={"IS ADMIN: " + usuario.isAdmin}>
                  <ListItemText primary={usuario.email} />
                </Tooltip>
                {usuario.nombre !== user ? (
                  <>
                    <Tooltip title="AGREGAR/QUITAR DE ADMIN">
                      <ListItemSecondaryAction
                        style={{ paddingRight: 65 }}
                        onClick={() =>
                          handleAdmin(usuario._id, usuario.isAdmin)
                        }
                      >
                        <IconButton edge="end" aria-label="add-admin">
                          <GroupAddSharp />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </Tooltip>
                    <Tooltip title="ELIMINAR">
                      <ListItemSecondaryAction
                        onClick={() => handleDelete(usuario._id)}
                      >
                        <IconButton edge="end" aria-label="delete">
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </Tooltip>
                  </>
                ) : null}
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        style={{ fontSize: 20 }}
      >
        <Alert onClose={handleClose} severity="warning">
          <Typography style={{ fontSize: 18 }}>
            Has eliminado a un Usuario
          </Typography>
        </Alert>
      </Snackbar>
    </Grid>
  );
}
