import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../state/search";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "../utils/stylesHome";

const Search = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      dispatch(setSearch(keyword));
      setKeyword("");
      history.push(`/search/${keyword}`);
    } else {
      dispatch(setSearch(keyword));
      setKeyword("");
      history.push("/");
    }
  };

  return (
    <form
      onSubmit={searchHandler}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchIcon />
      <InputBase
        placeholder="Busqueda"
        onChange={(e) => setKeyword(e.target.value)}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        name="titulo"
        value={keyword}
      />
    </form>
  );
};

export default Search;

// en el home, donde se nuclea todas las funcones y controladores que no merecen el uso de Redux:
//const keyword =  match.params.keyword //obtengo los parametros en el del param, y los tenog que pasar al dispach, previo a pasar { match }

// tambien tengo que pasar keyword='', como parametro en las actions, y agrgearlo a la url ?keyword${keyword}.

// Crear la ruta de search con

/* <Route path='/search/:keyword' component= {Home}/> */
