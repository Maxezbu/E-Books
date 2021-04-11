import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import { useHistory } from "react-router";

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

export default function AdminMenu() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUsers = () => {
    setAnchorEl(null);
    history.push("/admin/users");
  };

  const handleCategorias = () => {
    setAnchorEl(null);
    history.push("/admin/categorias");
  };

  const handleBooks = () => {
    setAnchorEl(null);
    history.push("/admin/products");
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="main"
        onClick={handleClick}
      >
        Administador
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleUsers}>
          <ListItemIcon>
            <SupervisorAccountIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Administar Usuarios" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleBooks}>
          <ListItemIcon>
            <BookmarksIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Administar Libros" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleCategorias}>
          <ListItemIcon>
            <BookmarksIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Administar Categorías" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
