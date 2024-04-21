import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const TasksContext = createContext(null)

export function TasksData({children}) {

    const navigate = useNavigate()
   
    const [task, setNewTask] = useState(null)
 
 function createNewTask(newTask) {
    setNewTask(newTask)
    navigate(paths.MAIN)
 }




 return <TasksContext.Provider value={{createNewTask}}>
            {children}
        </TasksContext.Provider>
        
}