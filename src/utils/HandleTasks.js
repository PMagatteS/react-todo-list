import dayjs from 'dayjs';
import React, {useContext, createContext, useState} from 'react';



const contex = createContext();

export const StateContext = ({children}) => {
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("Low");
    const [date, setDate]         = useState(dayjs());
    const [taskList, setTaskList] = useState([]);
    const [finishedTask, setFinishedTask] = useState([]);
    const [openModal, setOpenModal] = useState(false)   

    const addTask = (task, action) => {
        switch(action) {
            case 'Task List':
                return setTaskList((previous) => [task, ...previous])
            case 'Finished Task':
                return setFinishedTask((previous) => [task, ...previous])
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
                const newFinishedArr = finishedTask
                const newFinishedindex = newFinishedArr.indexOf(task)
                newFinishedArr.splice(newFinishedindex, 1)
                return setFinishedTask(newFinishedArr)

            default:
                return null
            
            }
    };

    const changeDate = (newValue) => {
        const newDate = dayjs(newValue).toString()
        if(!dayjs().isBefore(newDate)){
          console.log('will handle this error later');
        }else{
          setDate(newValue);
          console.log(date);
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
            finished: false
        }

        addTask(task, 'Task List')
    }

    const toggleModal = () => {
        setOpenModal(!openModal)
        
    }

    return (
        <contex.Provider 
        value={{
            taskList,
             finishedTask,
             taskName,
             priority,
             date,
             openModal,
             addTask,
             removeTask,
             changeDate,
             getName, 
             getPriority,
             createTask,
             toggleModal,
             }}>
            {children}
        </contex.Provider>
    )
}

export const useStateContext = () =>  useContext(contex)