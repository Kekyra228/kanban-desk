import { useNavigate } from "react-router-dom"
import { paths } from "../../lib/constsns"


function Login({setIsAuth}) {

const navigate = useNavigate()

function login() {
    setIsAuth(true)
    navigate(paths.MAIN)
}

    return (
        <>
       
         <h2>Вход</h2>
        <button type="button" onClick={login}>Войти</button>
         
        </>
    )
}
export default Login