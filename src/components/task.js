import React from "react";
import {Box, Card, CardContent, Typography, Checkbox } from "@mui/material";
import { Delete } from "@material-ui/icons";
import {cardStyle} from "../style"
import {useStateContext} from "../utils/HandleTasks"


const Task = ({task, index}) => {
  const {removeTask} = useStateContext()
  const taskColor = () => {
    switch(task.priority){
      case 'Low':
        return 'green'
      case 'Medium':
        return 'orange'
      case 'High':
        return 'red'
      default:
        return 'none'

    }
  }
  const borderColor = {bordrer: "2px solid " + taskColor()}
  

  return <div>
 
    <Card raised={true} sx={cardStyle.card}>
      <CardContent sx={borderColor}>
        <Box sx={cardStyle.cardBox }>
        
        {task.completed?<Checkbox margin={'auto'}  defaultChecked/>:<Checkbox margin={'auto'}  /> }   

        <Typography sx={cardStyle.cardTypography} >
          {task.name}
        </Typography>

        <Typography sx={{margin: "auto"}}>
          {task.date}
        </Typography>
       
        <Delete style={cardStyle.trashIcon} onClick={() => removeTask(index, 'Task List') }></Delete>
        </Box>
      </CardContent>
    </Card>
  </div>;
};

export default Task;
