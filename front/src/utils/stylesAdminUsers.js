import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  typography: {
    subtitle: {
      fontSize: 12,
    },
  },
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    minHeight: "100vh",

    flexGrow: 1,
    maxWidth: 800,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
