import { useState } from "react"
import { HeaderBlock, HeaderBtnMain, HeaderMain, HeaderNav, HeaderPopUserSet, HeaderUser, UserButton, UserMail, UserThemInput, UserTheme } from "./Header.styled"
import { Container } from "../Common.styled"


function Header({tasksList, setTasksList}) {


const [isOpen, setOpen] = useState(false)
const OpenUser =()=>{
	setOpen ((isOpen)=>!isOpen)
}

		function addTask() {
			const newTask = { 
				id: tasksList.length+1,
				theme:"No name",
				name: "Новая задача", 
				date:"01.01.24",
				status:"Без статуса"
				}
			setTasksList([...tasksList, newTask])
		}

    return (
     <HeaderMain>
		<Container>
		<HeaderBlock>
				<div className="header__logo _show _light">
						<a href="" target="_self"><img src="images/logo.png" alt="logo"></img></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo"></img></a>
					</div>
					<HeaderNav>
					<HeaderBtnMain onClick={addTask}  id="btnMainNew">Создать новую задачу</HeaderBtnMain>
						<HeaderUser onClick={OpenUser} href="#user-set-target">Ivan Ivanov</HeaderUser>
						{isOpen && 
						<HeaderPopUserSet>
							<p>Ivan Ivanov</p>
							<UserMail>ivan.ivanov@gmail.com</UserMail>
							<UserTheme>
								<p>Темная тема</p>
								<UserThemInput></UserThemInput>
							</UserTheme>
							<UserButton><a href="#popExit">Выйти</a></UserButton>
						</HeaderPopUserSet>
						}
					</HeaderNav>
				</HeaderBlock>
		</Container>
	 </HeaderMain>
    )
}

export default Header