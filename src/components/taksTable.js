import {Box} from "@mui/material"
import {useStateContext} from "../utils/HandleTasks"
import Task from "./Task";

const TaksTable = () => {
  const {taskList, completedTask, showTasks} = useStateContext();

  return <Box>
   
    {showTasks?taskList.map((el, index) => (<Task task={el} key={index} ></Task>)) : completedTask.map((el, index) => (<Task task={el} key={index} ></Task>))}
    
  </Box>;
};

export default TaksTable;
