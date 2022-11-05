import React, {useContext} from "react";
// import Navbar from "./components/Navbar";
import ModalForm from "./components/ModalForm";
import { useStateContext } from "./utils/HandleTasks";



function App() {
  // const {taskList, finishedTask} = useContext(StateContext);
  const {taskList,
         finishedTask, 
         addTask,
         removeTask
} = useStateContext();

const deleting = () => {
  removeTask(2)
  console.log(taskList);

}
    
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <button onClick={ deleting  }>test</button>
      <ModalForm></ModalForm>
    </div>
  );
}

export default App;
