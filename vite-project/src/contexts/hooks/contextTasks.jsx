import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const TasksContext = createContext(null)

export function TasksData({children}) {
   
   const [tasksList, setTasksList] = useState([])
 
   function createNewTask(newTask) {
      setTasksList(newTask)
   }




 return <TasksContext.Provider value={{tasksList, createNewTask}}>
            {children}
        </TasksContext.Provider>
        
}