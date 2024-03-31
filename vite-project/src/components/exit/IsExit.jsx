import { ExitBlock, ExitButtonNo, ExitButtonYes, ExitContainer, ExitFormGroup, ExitTtl, PopExit } from "./IsExit.styled"

function IsExit() {
    return (
       <PopExit>
		<ExitContainer>
			<ExitBlock>
					<ExitTtl>
					<h2>Выйти из аккаунта?</h2>
					</ExitTtl>
						<form  className="pop-exit__form" id="formExit" action="#">
							<ExitFormGroup>
								<ExitButtonYes><a href="modal/signin.html">Да, выйти</a></ExitButtonYes>
								<ExitButtonNo><a href="main.html">Нет, остаться</a> </ExitButtonNo>
							</ExitFormGroup>
						</form >
			</ExitBlock>
		</ExitContainer>
	   </PopExit>
    )
}
export default IsExit