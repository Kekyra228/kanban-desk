import { useState } from "react"
import { HeaderBlock, HeaderBtnMain, HeaderMain, HeaderNav, HeaderPopUserSet, HeaderUser, UserButton, UserMail, UserTheme, UserThemeDark, UserThemeLight } from "./Header.styled"
import { Container } from "../Common.styled"
import IsExit from "../exit/IsExit"
import { Link } from "react-router-dom"
import { paths } from "../../lib/constsns"
import CreatedTask from "../createdTask/CreatedTask"
import { useUserContext } from "../../contexts/hooks/useUser"
import { useTasksContext } from "../../contexts/hooks/useTasks"


function Header({theme, setTheme, changeTheme}) {

	const {user} = useUserContext()

	const {tasksList, setTasksList} = useTasksContext()

const [isOpen, setOpen] = useState(false)
const OpenUser =()=>{
	setOpen ((isOpen)=>!isOpen)
}


const [isUserExit, setExit] = useState(false)

const OpenExitWindow = () => {
	setExit ((isUserExit)=>!isUserExit)
}

    return (
     <HeaderMain>
		<Container>
		<HeaderBlock>
			{/* { theme ? 	<div>
				<Link to={paths.MAIN}><img src="/logo.png" alt="logo" /></Link>
				</div> :
				<div>
					<Link to={paths.MAIN}><img src="images/logo_dark.png" alt="logo"></img></Link>
				</div> 
			} */}
				<div>
					<Link to={paths.MAIN}><img src="/logo.png" alt="logo" /></Link>
				</div>
					<HeaderNav>
					<HeaderBtnMain > 
					<Link to={paths.CREATE}>Создать новую задачу</Link>
					</HeaderBtnMain>{

					}
						<HeaderUser onClick={OpenUser} >{user.name}</HeaderUser>
						{isOpen && 
						<HeaderPopUserSet id="user-set-target" >
							<p>{user.name}</p>
							<UserMail>{user.login}</UserMail>
							<UserTheme>
								{/* <p> {theme} тема</p>
								<UserThemeLight onClick={changeTheme} />
								<UserThemeDark onClick={changeTheme} /> */}
							</UserTheme>
							<UserButton> <Link to={paths.EXIT}><p>Выйти</p></Link></UserButton>
						</HeaderPopUserSet>
						}
					</HeaderNav>
				</HeaderBlock>
		</Container>
	 </HeaderMain>
    )
}

export default Header
