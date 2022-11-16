import dayjs from 'dayjs';
import React, {useContext, createContext, useState} from 'react';



const contex = createContext();

export const StateContext = ({children}) => {
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("Low");
    const [date, setDate]         = useState(dayjs());
    const [taskList, setTaskList] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);
    const [openModal, setOpenModal] = useState(false) 
    const [openDrawer, setOpenDrawer] = useState(false)  
    const [showTasks, setShowTasks] = useState(true)
  

    const addTask = (task, action) => {
        switch(action) {
            case 'Task List':
                return setTaskList((previous) => [task, ...previous])
            case 'Finished Task':
                return setCompletedTask((previous) => [task, ...previous])
            default:
                return null
            
        }
    };

    const removeTask = (task, action) => {
        switch(action) {
            case 'Task List':
                const newTaskArr = taskList
                const newTaskindex = newTaskArr.indexOf(task)
                newTaskArr.splice(newTaskindex, 1)
                return setTaskList(newTaskArr)
                
            case 'Finished Task':
                const newFinishedArr = completedTask
                const newFinishedindex = newFinishedArr.indexOf(task)
                newFinishedArr.splice(newFinishedindex, 1)
                return setCompletedTask(newFinishedArr)

            default:
                return null
            
            }
    };

    const changeDate = (newValue) => {
        const newDate = dayjs(newValue).toString()
        if(!dayjs().isBefore(newDate)||dayjs(newValue).toString()==="Invalid Date"){
          console.log('will handle this error later');
        }else{
          setDate(newValue);
        }
      };
     
    const getName = (e) => {
        setTaskName(e.target.value)
        
    };
    
    const getPriority = (e) => {
        setPriority(e.target.value)
        
    };

    const createTask = () => {

        if(dayjs().isAfter(date)){
            // will handle this error later
           return 

        }

        if (taskName.length  < 1){
            // will handle this error later
           return 
        }
        const task = {
            name : taskName,
            date: date,
            priority: priority,
            completed: false
        }

        addTask(task, 'Task List')
    }

    const toggleModal = () => {
        setOpenModal(!openModal)
        
    }

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    const showTasksList = (bool) => {
        setShowTasks(bool)
    }

    return (
        <contex.Provider 
        value={{
            taskList,
             completedTask,
             taskName,
             priority,
             date,
             openModal,
             openDrawer,
             showTasks,
             addTask,
             removeTask,
             changeDate,
             getName, 
             getPriority,
             createTask,
             toggleModal,
             toggleDrawer,      
             showTasksList,  
             }}>
            {children}
        </contex.Provider>
    )
}

export const useStateContext = () =>  useContext(contex)