import {Box} from "@mui/material"
import {useStateContext} from "../utils/HandleTasks"
import Sidebar from "./Sidebar";
import Task from "./Task";
import {taskTable} from "../style"

const TaksTable = () => {
  const {taskList, completedTask, showTasks} = useStateContext();

  return <Box sx={taskTable}>
      <Sidebar></Sidebar>   
      <Box sx={{flexGrow:1, margin: "10px"}}>

    {showTasks?taskList.map((el, index) => (<Task task={el} index={index} key={index} ></Task>)) : completedTask.map((el, index) => (<Task task={el} key={index} ></Task>))}
      </Box>
    
  </Box>;
};

export default TaksTable;
