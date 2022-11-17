import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon,Drawer } from "@mui/material";
import { useStateContext } from "../utils/HandleTasks";
import { ListAlt, AssignmentTurnedIn } from "@material-ui/icons";



const OptionList = () => {
  return(  
  <Box>
  <List>
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
        <ListAlt/>
        </ListItemIcon>
      <ListItemText primary="Tasks" />
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
        <AssignmentTurnedIn/>
        </ListItemIcon>
      <ListItemText primary="Finished Tasks" />
      </ListItemButton>
    </ListItem>
  </List>
</Box>);
}


const Sidebar = () => {
  const {openDrawer, toggleDrawer} = useStateContext();

  return(<div>
    <Box sx={{ width: "fit-content", display:["none", "block", "block"]}}>

    <OptionList/>
    </Box>


  <Drawer
  anchor="right"
  open={openDrawer}
  onClose={toggleDrawer}
  >
    <OptionList/>
        </Drawer>
            
       </div> )
};

export default Sidebar;
