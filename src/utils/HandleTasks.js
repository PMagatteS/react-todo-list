import React, {useContext, createContext, useState} from 'react';


const contex = createContext();

export const StateContext = ({children}) => {
    const [taskList, setTaskList] = useState([]);
    const [finishedTask, setFinishedTask] = useState([]);
    const addTask = (task) => {
        setTaskList((previous) => [task, ...previous])
    }

    const removeTask = (task) => {
        const newArr = taskList
        newArr.splice(task)
        setTaskList(newArr)
    }
    return(
        <contex.Provider value={{
            taskList,
             finishedTask,
             addTask,
             removeTask,
             }}>
            {children}
        </contex.Provider>
    )
}



