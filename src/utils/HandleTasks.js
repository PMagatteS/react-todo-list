import dayjs from 'dayjs';
import React, {useContext, createContext, useState} from 'react';



const contex = createContext();

export const StateContext = ({children}) => {
    const [taskName, setTaskName] = useState("")
    const [priority, setPriority] = useState("")
    const [date, setDate]         = useState(dayjs())
    const [taskList, setTaskList] = useState([]);
    const [finishedTask, setFinishedTask] = useState([]);

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
        }
      };
     
    const getName = (e) => {
        setTaskName(e.target.value)
    };

    const getpriority = (e) => {
        setPriority(e.target.value)
    };

    const createTask = () => {
        const task = {
            name : taskName,
            date: date,
            priority: priority,
            finished: false
        }

        addTask(task, 'Task List')
    }

    return (
        <contex.Provider 
        value={{
            taskList,
             finishedTask,
             addTask,
             removeTask,
             }}>
            {children}
        </contex.Provider>
    )
}

export const useStateContext = () =>  useContext(contex)