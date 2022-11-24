import React from "react";
import {Box, Card, CardContent, Typography, Checkbox } from "@mui/material";
import { Delete } from "@material-ui/icons";
import {cardStyle} from "../style"
import {useStateContext} from "../utils/HandleTasks"


const Task = ({task, index}) => {
  const {removeTask, completeTask, uncompletedTask} = useStateContext()
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
  const borderColor = {border: "2px solid " + taskColor()}
  cardStyle.cardTypography.textDecoration = task.completed?"line-through": "none"
  return <>
 
    <Card raised={true} sx={cardStyle.card}>
      <CardContent sx={borderColor}>
        <Box sx={cardStyle.cardBox }>
        {!task.completed?<Checkbox margin={'auto'} onChange={() => completeTask(task, index)}  checked={task.completed}/>:<Checkbox margin={'auto'} onChange={() => uncompletedTask(task, index)}  checked={task.completed}/>}

        <Typography sx={cardStyle.cardTypography} >
          {task.name}
        </Typography>

        <Typography sx={{margin: "auto"}}>
          {task.date}
        </Typography>
        {task.completed?<Delete style={cardStyle.trashIcon} onClick={() => removeTask(index, "Completed Task") }></Delete>:<Delete style={cardStyle.trashIcon} onClick={() => removeTask(index, "Task List") }></Delete>}   

        
        </Box>
      </CardContent>
    </Card>
  </>;
};

export default Task;
