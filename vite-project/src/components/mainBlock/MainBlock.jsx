import { useState } from "react";
import Columns from "./Columns";
import { MainContainer, MainBlockWithContent, MainContent } from "./Main.styled";
import { Container } from "../Common.styled";



const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
];


function MainBlock({ tasksList, isLoading }) {

	return (

		<MainContainer>
			<Container>
			<MainBlockWithContent>
					<MainContent>
						{isLoading ? "Данные загружаются" : <>
							{statusList.map((status, index) =>
								<Columns status={status} key={index}
									const tasks={tasksList.filter((task) => task.status === status)}
								/>
							)
							}</>

						}
					</MainContent>
				</MainBlockWithContent>
			</Container>
		</MainContainer>
	)
}
export default MainBlock