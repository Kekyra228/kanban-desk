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
        <h1>ЛОГИН ПАГЕ</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, doloribus?</p>
        <button type="button" onClick={login}>Войти</button>
        </>
    )
}
export default Login