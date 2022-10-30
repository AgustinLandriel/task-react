import {createContext,useState,useEffect} from 'react'
import {task as data} from "../data/Task"

//Creo el nombre del contexto que almacena los estados
export const TaskContext = createContext()

export function TaskContextProvider(props) { //Es el componente que engloba todo
   
	const [task,setTask] = useState([])

	
	const createTask = (taskNew) => {
		return setTask([...task,{
			title: taskNew.title,
			id: task.length,
			descripcion: taskNew.descripcion
		}])
	}
	
	const deleteTask = (taskId) => {
		const deleteT = task.filter((t =>  t.id !== taskId))
		return setTask(deleteT)
	}
	
	
	useEffect(()=>{
	setTask(data)
	},[])

	return (
	<TaskContext.Provider value = {{
		task,
		deleteTask,
		createTask
	}}>  
		{props.children}
	</TaskContext.Provider>
  )
}
