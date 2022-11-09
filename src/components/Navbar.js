import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { AddCircleOutlineRounded } from "@material-ui/icons";
import { useStateContext } from "../utils/HandleTasks";

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
          <IconButton color="inherit" onClick={toggleModal} >
            <AddCircleOutlineRounded></AddCircleOutlineRounded>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
