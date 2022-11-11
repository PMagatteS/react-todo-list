import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { AddCircleOutlineRounded, Menu } from "@material-ui/icons";
import { useStateContext } from "../utils/HandleTasks";
import { navbarStyle } from "../style";

const Navbar = () => {
  const {toggleModal} = useStateContext()
  return (
    <div>
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
            <AddCircleOutlineRounded style={{ fontSize: 40 }} ></AddCircleOutlineRounded>
          </IconButton>
          <IconButton color="inherit"  sx={navbarStyle.burgerMenu} >
            <Menu style={{ fontSize: 40 }}></Menu>
          </IconButton>
        </Toolbar>
      </AppBar>
          <IconButton color="primary"  onClick={toggleModal} sx={navbarStyle.addButtonMobile} >
            <AddCircleOutlineRounded style={{ fontSize: 60 }} ></AddCircleOutlineRounded>
          </IconButton>
    </div>
  );
};

export default Navbar;
