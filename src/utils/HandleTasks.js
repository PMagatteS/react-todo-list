import React, {useContext, createContext, useState} from 'react';


const contex = createContext();

export const StateContext = ({children}) => {
    const [taskList, setTaskList] = useState([1,2,3]);
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
    }

    const removeTask = (task, action) => {
        switch(action) {
            case 'Task List':
                const newTaskArr = taskList
                const newTaskindex = newTaskArr.indexOf(task)
                newTaskArr.splice(newTaskindex, 1)
                return setTaskList(newTaskArr)
                
            case 'Finished Task':
                const newFinishedArr = taskList
                const newFinishedindex = newFinishedArr.indexOf(task)
                newFinishedArr.splice(newFinishedindex, 1)
                return setTaskList(newFinishedArr)

            default:
                return null
            
            }
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