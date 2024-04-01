import { ExitBlock, ExitButtonNo, ExitButtonYes, ExitContainer, ExitForm, ExitFormGroup, ExitTtl, PopExit } from "./IsExit.styled"

function IsExit() {
    return (
       <PopExit  id="popExit">
		<ExitContainer>
			<ExitBlock>
					<ExitTtl>
					<h2>Выйти из аккаунта?</h2>
					</ExitTtl>
				
						<ExitForm>
						<ExitFormGroup>
								<ExitButtonYes><a href="modal/signin.html">Да, выйти</a></ExitButtonYes>
								<ExitButtonNo><a href="main.html">Нет, остаться</a> </ExitButtonNo>
							</ExitFormGroup>
						</ExitForm>
					
			</ExitBlock>
		</ExitContainer>
	   </PopExit>
    )
}
export default IsExit