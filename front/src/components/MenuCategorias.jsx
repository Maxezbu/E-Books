import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { useDispatch, useSelector } from "react-redux";
import { setSearchCategory } from "../state/search";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuCategorias({ categorias }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const searchCategory = (searchBook) => {
    dispatch(setSearchCategory(searchBook));
    setAnchorEl(null);
    return history.push(`/search/category/${searchBook}`);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Categorias
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {categorias &&
          categorias.map((categoria, i) => {
            return (
              <StyledMenuItem
                key={i}
                onClick={() => searchCategory(categoria._id)}
              >
                <ListItemIcon>
                  <StarHalfIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={categoria.name} />
              </StyledMenuItem>
            );
          })}
      </StyledMenu>
    </div>
  );
}
