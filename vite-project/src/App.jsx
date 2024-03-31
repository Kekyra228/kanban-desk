import { useState } from 'react'
import './App.css'
import IsExit from './components/exit/IsExit'
import CreatedTask from './components/createdTask/CreatedTask'
import DataTask from './components/dataAboutTasks/DataTasks'
import Header from './components/header/Header'
import MainBlock from './components/mainBlock/MainBlock'
import { tasks } from './data'
import { useEffect } from 'react'
import { GlobalStyle } from './components/Global.styled'

function App() {

const [tasksList, setTasksList] = useState(tasks)

const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
  setTimeout(() => {
    setIsLoading(false)
  }, 1000);
}
,[])

  return (
    <>

      <GlobalStyle />
      <Header setTasksList={setTasksList}tasksList={tasksList}/>
      <IsExit/>
      <CreatedTask/>
      <DataTask/>
     <MainBlock tasksList={tasksList} isLoading={isLoading} />

   </>

  )
}

export default App
