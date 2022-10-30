import {useContext } from "react";
import {TaskContext} from "../context/TaskContext"

function TaskCard({tasklist}) {
  
	const {task,deleteTask} = useContext(TaskContext)
	const handlerDelete = () => {
    return deleteTask(tasklist.id);
  	};

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tasklist.title}</h1>
      <p className="text-gray-500 text-sm">{tasklist.descripcion}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-900" onClick={handlerDelete}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
