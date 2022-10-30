import { useContext,useState } from 'react'
import {TaskContext} from "../context/TaskContext"

function TaskForm() {

	const [title, setTitle] = useState("")
	const [descripcion, setDescription] = useState("")

	//Uso el contexto y llamo lo que quiero con deestructuracion
	const {createTask} = useContext(TaskContext)
	

	const handleSubmit = (event) => {
		event.preventDefault()
		//console.log(descripcion)
		createTask({
			title,
			descripcion
		})

		setTitle("")
		setDescription("")
	}

  return (
	<div className='max-w-md mx-auto'>

		<form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>
		
		<h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
		<input className='bg-slate-300 p-3 w-full mb-2' autoFocus type="text" placeholder='Escribe tu tarea' value={title} onChange={(e)=>{
			setTitle(e.target.value)	
		}} />

		<textarea className='bg-slate-300 p-3 w-full mb-2' value={descripcion} placeholder="Escribe una descripcion" onChange={ (e) => {setDescription(e.target.value)} }></textarea>


		<button className='bg-yellow-500 px-3 py-1 text-black rounded-sm'>Guardar</button>
		</form>
	</div>
  )
}

export default TaskForm