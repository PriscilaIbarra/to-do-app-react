import React , { useState, useEffect} from "react"
import { Task, 
         TaskFormProps      
       } from '../../types/index'
import TaskFormFooterContainer from "../TaskFormFooterContainer"
import './taskform.css';

const taskFormStyle = {
   marginBottom:'60px',
   marginLeft:'2.1%',
   marginRight:'1%'
}

const TaskForm : React.FC <TaskFormProps>= ({onAdd,taskToEdit,editTask,onSave,onCancel})=>{

     const [task, setTask] = useState<Task>({
        title:'',
        description:'',
        complete:false,
     })

     const getNewTask = ():Task=>{
      return {
        title:'',
        description:'',
        complete:false
      }
     }

     useEffect(()=>{
      setTask(taskToEdit)
     },[taskToEdit])

     const updateTask = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
       setTask({
        ...task,
        [e.target.name]:e.target.value
       })
     }

     const cleanTaskForm = ()=>{
        setTask(getNewTask())
     }

     const add = ()=>{
        onAdd(task);
        cleanTaskForm();
     }

     const cancel = ()=>{       
        onCancel()
     }

     const save = ()=>{
        let taskToSave :Task = task
        cleanTaskForm()
        onSave(taskToSave)  
     }

     return (
       <div
       style={taskFormStyle}
       >
            <input
            type="text"
            name="title" 
            value={task.title}
            className={"custom-input-note-primary"}
            onChange={updateTask}
            />
            <textarea 
            name="description"
            className={"custom-input-note-primary text-area-primary"}       
            value={task.description}
            onChange={updateTask}
            ></textarea>
            <TaskFormFooterContainer
               addButton={<button
                           className={"custom-button-primary"}
                           onClick={add}>Add</button>}
               saveButton={<button 
                           className={"custom-button-primary left"}
                           onClick={save}>Save</button>}
               cancelButton={<button 
                           className={"custom-cancel-button right"}
                           onClick={cancel}>Cancel</button>}
               editTask={editTask}
            />
       </div>
     )
}

export default TaskForm;