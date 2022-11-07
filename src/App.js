import React, {useContext} from "react";
// import Navbar from "./components/Navbar";
import ModalForm from "./components/ModalForm";
import { useStateContext } from "./utils/HandleTasks";



function App() {
 
  const {taskList,
         finishedTask, 
         addTask,
         removeTask
} = useStateContext();


    
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <ModalForm></ModalForm>
    </div>
  );
}

export default App;
