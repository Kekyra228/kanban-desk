import { Link, useNavigate, useParams } from "react-router-dom"
import { paths } from "../../lib/constsns"
import CalendarContent from "../calendar/Calendar"
import { useState } from "react";
import { PopBrowse, PopBrowseBlock, PopBrowseBtn, PopBrowseBtnClose, PopBrowseBtnDelete, PopBrowseBtnEdit, PopBrowseBtnGroup, PopBrowseContainer, PopBrowseContent, PopBrowseForm, PopBrowseFormBlock, PopBrowseTopBlock, PopBrowseWrap, PopBrowseContentTheme, PopBrowseContentThemeTop, PopBrowseStatus, PopBrowseStatusThemes, PopBrowseStatusTheme, PopBrowseEditMode, PopBrowseEditBtnGroup, PopBrowseBtnEditSave, PopBrowseBtnEditUndo, PopBrowseBtnEditDelete, PopBrowseBtnEditClose, EditedArea } from "./DataTasks.styled";
import { deleteTask, editTask } from "../../api";
import { useUserContext } from "../../contexts/hooks/useUser";
import { useTasksContext } from "../../contexts/hooks/useTasks";
import { NewCardFormInput } from "../createdTask/CreatedTasks.styled";


function DataTask() {

	const nav = useNavigate()
	const {tasksList, createNewTask}  = useTasksContext()
	const {user} = useUserContext()
	const {id} = useParams()
	


	

const deleteItem = async () => {
	await deleteTask({id, token:user.token}).then((tasksList)=>{createNewTask(tasksList.tasks)
		nav(paths.MAIN)
        })
}


const [isEdit, setIsEdit] = useState(false)
const openEditMode = () => {
	setIsEdit((isEdit)=>!isEdit)
}

const taksItemCurrent = tasksList.find((task)=>task._id===id)

const [editingTask, setEditingTask] = useState ({
	title:taksItemCurrent.title,
    topic:taksItemCurrent.topic,
    description:taksItemCurrent.description,
	status: taksItemCurrent.status
})

const editItem = async () => {
	const editingTaskData = {...editingTask, id, token:user.token}
	await editTask(editingTaskData).then((response)=>{createNewTask(response.tasks)})
	nav(paths.MAIN)
}

	const [selected, setSelected] = useState("");

    return (
        <PopBrowse>
				<PopBrowseContainer>
					<PopBrowseBlock>
						<PopBrowseContent>
							<PopBrowseTopBlock>
								{isEdit ?  
								<NewCardFormInput 
                                		type="text" 
                                        name="title"
                                        value={editingTask.title}
                                        onChange={(e) => setEditingTask({...editingTask, title: e.target.value})}
                                        placeholder="Введите новое название задачи...">
                                </NewCardFormInput>
								:
								<h3>{taksItemCurrent.title}</h3>}
								
								<PopBrowseContentThemeTop>
									<p $topic = {taksItemCurrent.topic}>{taksItemCurrent.topic}</p>
								</PopBrowseContentThemeTop>
							</PopBrowseTopBlock>
							<PopBrowseStatus>
								<p>Статус</p>
								<PopBrowseStatusThemes>
									{isEdit ? 
									<PopBrowseStatusTheme> Без статуса
										<input
											type="radio" 
											name="status"
											value = "Без статуса"
											onChange={(e) => setEditingTask({...editingTask, status: e.target.value})}
											/>

											
										</PopBrowseStatusTheme>

										: 
										<PopBrowseStatusTheme>
										<p>{taksItemCurrent.status}</p> 
										</PopBrowseStatusTheme>
									
									}
								</PopBrowseStatusThemes>
							</PopBrowseStatus>
							<PopBrowseWrap>
								<PopBrowseForm id="formBrowseCard" action="#">	
								{isEdit ?
								<PopBrowseFormBlock>
								<label htmlFor="textArea01" className="subttl">Отредактируйте описание </label>
								<EditedArea
								type="text" 
								name="description"
								value={editingTask.description}
								onChange={(e) => setEditingTask({ description: e.target.value})}
								placeholder="Введите описание задачи...">
								</EditedArea>
							</PopBrowseFormBlock> :
								<PopBrowseFormBlock>
								<label htmlFor="textArea01" className="subttl">Описание задачи</label>
								<EditedArea name="text" id="textArea01"  readOnly placeholder="Введите описание задачи...">{taksItemCurrent.description}</EditedArea>
							</PopBrowseFormBlock>
								}								
									
								</PopBrowseForm >
									
									<CalendarContent selected={selected} setSelected={setSelected}/>
								
							</PopBrowseWrap>
							<PopBrowseContentTheme>
								<p className="categories__p subttl">Категория</p>
								<div className="categories__theme _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
							</PopBrowseContentTheme>
							{/* <PopBrowseBtn>
								<PopBrowseBtnGroup>
									<PopBrowseBtnEdit onClick={openEditMode}>Редактировать задачу</PopBrowseBtnEdit>
									<PopBrowseBtnDelete onClick={deleteItem}>Удалить задачу</PopBrowseBtnDelete>
								</PopBrowseBtnGroup>
								<PopBrowseBtnClose><Link to ={paths.MAIN} >Закрыть</Link></PopBrowseBtnClose>
							</PopBrowseBtn> */}

							{isEdit ? 
							
								<PopBrowseEditMode>
								<PopBrowseEditBtnGroup>
									<PopBrowseBtnEditSave onClick={editItem}>Сохранить</PopBrowseBtnEditSave>
									<PopBrowseBtnEditUndo onClick={openEditMode}>Отменить</PopBrowseBtnEditUndo>
									<PopBrowseBtnEditDelete onClick={deleteItem}>Удалить задачу</PopBrowseBtnEditDelete>
								</PopBrowseEditBtnGroup>
								<PopBrowseBtnEditClose><Link to ={paths.MAIN} >Закрыть</Link></PopBrowseBtnEditClose>
							</PopBrowseEditMode> : 
							
							<>
							<PopBrowseBtn>
							<PopBrowseBtnGroup>
								<PopBrowseBtnEdit onClick={openEditMode}>Редактировать задачу</PopBrowseBtnEdit>
								<PopBrowseBtnDelete onClick={deleteItem}>Удалить задачу</PopBrowseBtnDelete>
							</PopBrowseBtnGroup>
							<PopBrowseBtnClose><Link to ={paths.MAIN} >Закрыть</Link></PopBrowseBtnClose>
						</PopBrowseBtn>
						</>
							}
						
						</PopBrowseContent>
					</PopBrowseBlock>
				</PopBrowseContainer>
			</PopBrowse>
    )
}

export default DataTask