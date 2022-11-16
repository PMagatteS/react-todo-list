import React from "react";
import {Box, Card, CardContent, Typography, Checkbox } from "@mui/material";
import { Delete } from "@material-ui/icons";
import {cardStyle} from "../style"
import {useStateContext} from "../utils/HandleTasks"


const Task = (props) => {
  const {removeTask} = useStateContext()
  return <div>
 
    <Card raised={true} sx={cardStyle.card}>
      <CardContent>
        <Box sx={cardStyle.cardBox}>
        
        {props.task.completed?<Checkbox margin={'auto'}  defaultChecked/>:<Checkbox margin={'auto'}  /> }   

        <Typography sx={cardStyle.cardTypography} >
          {props.task.name}
        </Typography>
       
        <Delete style={cardStyle.trashIcon} onClick={() => removeTask(props.task, 'Task List') }></Delete>
        </Box>
      </CardContent>
    </Card>
  </div>;
};

export default Task;
