import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((tema) => ({
  icon: {
    marginRight: tema.spacing(2),
  },
  heroContent: {
    backgroundColor: tema.palette.primary,
  },
  heroButtons: {
    marginTop: tema.spacing(4),
  },
  cardGrid: {
    paddingTop: tema.spacing(8),
    paddingBottom: tema.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
    width: "65%",
    marginTop: "15px",
    margin: "auto",
    height: "300px",
  },
  cardContent: {
    flexGrow: 1,
    flexWrap: "wrap",
  },
  footer: {
    backgroundColor: tema.palette.primary,
    padding: tema.spacing(6),
  },
}));

export default useStyles;
