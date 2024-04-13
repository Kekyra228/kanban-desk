import React from 'react'
import Register from '../components/register/Register'

const RegisterPage = ({setName,setLogin,setPassword}) => {




  return (
    <Register setName={setName} setPassword={setPassword} setLogin={setLogin}/>
  )
}

export default RegisterPage
