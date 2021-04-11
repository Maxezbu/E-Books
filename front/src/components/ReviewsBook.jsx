// import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

// import {
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
// } from "@material-ui/core";

// import { useStyles } from "../utils/stylesAdminUsers";

import axios from "axios";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReviewsBook({ id }) {
  const [reviews, setReviews] = useState();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios.get(`/api/review/${id}`).then(({ data }) => setReviews(data));
  }, []);

  // const classes = useStyles();

  //   return (
  //     <div>
  //       <Grid container direction="row" justify="center" alignItems="center">
  //         <Grid item xs={10} style={{ padding: 20 }}>
  //           <div className={classes.demo}>
  //             <List>
  //               {reviews &&
  //                 reviews.map((review, i) => (
  //                   <ListItem key={i}>
  //                     <Typography>{review.user.nombre}: </Typography>
  //                     <ListItemText primary={review.texto} />
  //                   </ListItem>
  //                 ))}
  //             </List>
  //           </div>
  //         </Grid>
  //       </Grid>
  //     </div>
  //   );
  // }

  // export default function FullScreenDialog() {
  //   const classes = useStyles();
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
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
                <Divider />
              </ListItem>
            ))}
        </List>
      </Dialog>
    </div>
  );
}
