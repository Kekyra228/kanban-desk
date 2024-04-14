import { Link, useNavigate } from "react-router-dom"
import { paths } from "../../lib/constsns"
import { Wrapper } from "../Common.styled"
import { ContainerSignin, FormGroup, FormLogin, LoginBtn, Modal, ModalBlock, ModalInput, ModalTtl } from "./Login.styled"
import { logon } from "../../api"
import { useState } from "react"

function Login({setIsAuth, createUser}) {

    const [login, setUserLogin] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (event) => {
        event.preventDefault();
        await logon({ login, password}).then((data)=>{createUser(data.user)})
    
      }
    
// const navigate = useNavigate()

// function login() {
//     setIsAuth(true)
//     navigate(paths.MAIN)
// }

    return (
        <>
       <Wrapper>
        <ContainerSignin>
            <Modal>
                <ModalBlock>
                    <ModalTtl>
                        <h2>Вход</h2>
                    </ModalTtl>
					<FormLogin>
                        <ModalInput 
                            type="text"
                            name="login" 
                            id="formlogin"
                            placeholder="Эл. почта"
                            value={login}
                            onChange={(e)=>setUserLogin(e.target.value)}>
                        </ModalInput>

						<ModalInput 
                            type="password"
                            name="password" 
                            id="formpassword"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}>
                        </ModalInput>

                        <LoginBtn type="button" onClick={loginUser}>Войти</LoginBtn>
						<FormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to={paths.REGISTER}>Регистрируйся здесь</Link>
						</FormGroup>
                    </FormLogin>
                </ModalBlock>
            </Modal>
        </ContainerSignin>
       </Wrapper>
         
        </>
    )
}
export default Login