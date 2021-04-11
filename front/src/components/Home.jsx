import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../state/books";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

import useStyles from "../utils/stylesHome";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  createMuiTheme,
  ThemeProvider,
  Grow,
} from "@material-ui/core";

export default function Home() {
  const theme = createMuiTheme();

  theme.typography.h1 = {
    fontSize: "1.18rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
  };

  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const search = useSelector((state) => state.search);

  const [pageNumber, setPageNumber] = useState(0);

  const booksPerPage = 12;
  const pagesVisited = pageNumber * booksPerPage;

  const handleClick = (id) => {
    return history.push(`/SingleCard/${id}`);
  };

  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   let productosls = JSON.parse(localStorage.getItem("book"))
  //     ? JSON.parse(localStorage.getItem("book"))
  //     : [];
  //   console.log(productosls);
  //   if (userId) {
  //     const productos = productosls.map((libro) => ({
  //       producto: libro._id,
  //       cantidad: 1,
  //     }));
  //     dispatch(setCarritoLogin({ userId, productos }));
  //   }
  //   dispatch(setBooks());
  // }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      localStorage.removeItem("book");
    }
    dispatch(setBooks());
  }, []);

  let options = search.length > 0 ? search : books;

  const displayBooks = options
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((card) => {
      return (
        <>
          <Grid
            item
            key={card._id}
            xs={12}
            sm={6}
            md={4}
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 3000 } : {})}
          >
            <Grow in={checked}>
              <Card className={classes.card}>
                <CardMedia
                  style={{ padding: 20 }}
                  className={classes.cardMedia}
                  image={card.imagen}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.titulo}
                  </Typography>
                  <Typography>PRECIO: ${card.precio}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleClick(card._id)}
                  >
                    DETALLE
                  </Button>
                  <Button /*onClick={() => handleClick(libro , libro._id )}*/
                    size="small"
                    color="primary"
                  >
                    Agregar a carrito
                  </Button>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
        </>
      );
    });

  const pageCount = Math.ceil(books.length / booksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <ThemeProvider>
      <main className="color">
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              BIENVENIDOS A E-BOOKS
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              NUESTRA MEJOR SELECCION DE LIBROS PARA VOS
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {displayBooks}
            <ReactPaginate
              previousLabel={"Previos"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
