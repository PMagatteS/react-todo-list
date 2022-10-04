import React from "react";
import { Toolbar, AppBar, Typography, IconButton } from "@material-ui/core";
import { AddCircleOutlineSharp } from "@material-ui/icons";
// import useStyles from "../style";
import useStyles from "../style";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h2" component="div" className={classes.title}>
            Todo List
          </Typography>
          {/* <div className={classes.icon}></div> */}
          <IconButton className={classes.AddIcon} size="large" color="inherit">
            <AddCircleOutlineSharp />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
