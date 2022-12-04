import dayjs from 'dayjs';
import React, {useContext, createContext, useState} from 'react';



const context = createContext();

export const StateContext = ({children}) => {
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("Low");
    const [date, setDate]         = useState(dayjs());
    const [taskList, setTaskList] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);
    const [openModal, setOpenModal] = useState(false) 
    const [openDrawer, setOpenDrawer] = useState(false)  
    const [showTasks, setShowTasks] = useState(true)
    const [errors, setErrors] = useState({textFieldError: "", dateError: ""})
  

    const addTask = (task, action) => {
        switch(action) {
            case 'Task List':
                return setTaskList((previous) => [task, ...previous])
            case 'Completed Task':
                return setCompletedTask((previous) => [task, ...previous])
            default:
                return null
            
        }
    };

    const removeTask = (index, action) => {
        switch(action) {
            case 'Task List':
                const newTaskArr = taskList.filter((_, i) => i !== index);
                setTaskList(newTaskArr);
               return 
                
            case 'Completed Task':
                const newCompletedArr = completedTask.filter((_, i) => i !== index);
                setCompletedTask(newCompletedArr);
                return

            default:
                return null
            
            }
    };

    const changeDate = (newValue) => {
        const newDate = dayjs(newValue).toString()
        if(!dayjs().isBefore(newDate)||dayjs(newValue).toString()==="Invalid Date"){
         setErrors((previous) => ({...previous, dateError:"Invalid Date"}))
         setDate(newValue);
         
        }else{
            setDate(newValue);
            setErrors((previous) => ({...previous, dateError:""}))
        }
      };
     
    const getName = (e) => {
        setTaskName(e.target.value)
        if(e.target.value.length > 0){
            setErrors((previous) => ({...previous, textFieldError:""}))            

        }
                 
        
    };
    
    const getPriority = (e) => {
        setPriority(e.target.value)
        
    };

    const createTask = () => {

        if(dayjs().isAfter(date) && taskName.length  < 1){
            setErrors((previous) => ({...previous, dateError:"Invalid Date"}))
            setErrors((previous) => ({...previous, textFieldError:"This field is required"}))            
            return 
            
        }
        else if(dayjs().isAfter(date)){
            setErrors((previous) => ({...previous, dateError:"Invalid Date"}))
            return 
            
        }
        
        else if (taskName.length  < 1){
            setErrors((previous) => ({...previous, textFieldError:"This field is required"}))            
           return 
        }
        const task = {
            name : taskName,
            date: dayjs(date).format('YYYY-MM-DD HH:mm:ss').toString(),
            priority: priority,
            completed: false
        }

        addTask(task, 'Task List')
        setTaskName("")
        toggleModal()
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

    const completeTask = (task, index) => {
        const newtask = task
        newtask.completed = !newtask.completed
        removeTask(index, "Task List")
        addTask(newtask, "Completed Task")
    }
    
    const uncompletedTask = (task, index) => {
        const newtask = task
        newtask.completed = !newtask.completed
        removeTask(index, "Completed Task")
        addTask(newtask, "Task List")

    }

    return (
        <context.Provider 
        value={{
            taskList,
             completedTask,
             taskName,
             priority,
             date,
             openModal,
             openDrawer,
             showTasks,
             errors,
             addTask,
             removeTask,
             changeDate,
             getName, 
             getPriority,
             createTask,
             toggleModal,
             toggleDrawer,      
             showTasksList, 
             completeTask, 
             uncompletedTask,
             }}>
            {children}
        </context.Provider>
    )
}

export const useStateContext = () =>  useContext(context)