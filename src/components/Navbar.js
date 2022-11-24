import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { AddCircle, Menu } from "@material-ui/icons";
import { useStateContext } from "../utils/HandleTasks";
import { navbarStyle } from "../style";

const Navbar = () => {
  const {toggleModal, toggleDrawer} = useStateContext()
  return (
    <>
      <AppBar position="absolute">
        <Toolbar>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Todo list
          </Typography>
          <IconButton color="inherit" onClick={toggleModal} sx={navbarStyle.addButton} >
            <AddCircle style={{ fontSize: 40 }} ></AddCircle>
          </IconButton>
          <IconButton color="inherit" onClick={toggleDrawer}  sx={navbarStyle.burgerMenu} >
            <Menu style={{ fontSize: 40 }}></Menu>
          </IconButton>
        </Toolbar>
      </AppBar>
          <IconButton color="primary"  onClick={toggleModal} sx={navbarStyle.addButtonMobile} >
            <AddCircle style={{ fontSize: 80 }} ></AddCircle>
          </IconButton>
    </>
  );
};

export default Navbar;
