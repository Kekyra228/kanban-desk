import React from 'react'
import Login from '../components/auth/Login'


const LoginPage = ({setIsAuth, createUser}) => {
  return (
    <Login setIsAuth={setIsAuth} createUser={createUser}/>
  )
}

export default LoginPage
