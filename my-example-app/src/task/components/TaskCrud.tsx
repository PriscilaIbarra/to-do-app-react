import React, {Fragment, useState,} from "react";
import { ActionTypes } from "../actionTypes/index";
import { Action } from "../types/index";
import { TasksArray, Task} from "../types/index";
import TaskForm from "./TaskForm/TaskForm";
import TasksListContainer from './TasksListContainer';
import TasksList from "./TasksList";
import TaskCrudTitle from "./TaskCrudTitle/TaskCrudTitle";
import "./TaskCrudTitle/taskcrudtitle.css"


const taskCrudTitleStyle = {
  title:'To Do List',
  type:'h1',
  className:'title-primary'
}

const TaskCrud : React.FC  = ()=>{

    const [tasks, setTasks] = useState<TasksArray>([
      {title:'Buy Clothes', description:'Buy trousers and shirt',complete:false}
    ])
    const [task, setTask] = useState<Task>({
      title:'',
      description:'',
      complete:false,
    })
    
    const [edit,setEditTask] = useState<boolean>(false);

    const handleOnAdd = (task:Task)=>{
      let oldTasks : TasksArray = [...tasks]
      oldTasks.push(task);
      setTasks(oldTasks)
    }

    const completeTask = (task:Task)=>{
      let index : number = tasks.indexOf(task);
      if(index === -1) return 
      let taskToModified = tasks[index];
      taskToModified.complete = !taskToModified.complete
      replaceTask(index, taskToModified)       
    }

    const deleteTask = (task:Task)=>{
      let index : number = tasks.indexOf(task)
      if(index === -1) return 
      let newTasks : TasksArray = [...tasks]
      newTasks.splice(index,1)
      setTasks(newTasks)
    }
   
    const editTask = (task:Task)=>{
      setEditTask(true)
      handleOnEdit(task)
    }
 
    const handleOnEdit = (task:Task)=>{
      setTask(task)
    }
  
    const replaceTask = (position:number,updatedTask:Task)=>{
      let newTasks : TasksArray = [...tasks]
      newTasks.splice(position,1,updatedTask)
      setTasks(newTasks)
    }
  
    const handleOnSave = (updatedTask:Task)=>{
       let index: number = tasks.indexOf(task);
       if(index === -1) return
       replaceTask(index, updatedTask) 
       setEditTask(false)
    }
  
    const getNewTask = ():Task=>{
      return {
        title:'',
        description:'',
        complete:false
      }
    }
  
    const handleOnCancel = ()=>{
      setEditTask(false)
      setTask(getNewTask())
    }
  
    const handleOnAction = (action:Action)=>{
      switch(action.type){
        case ActionTypes.DELETE:
          deleteTask(action.payload)
          break;
        case ActionTypes.EDIT:
          editTask(action.payload)
          break;
        case ActionTypes.SET_AS_COMPLETE:
          completeTask(action.payload)
          break;
        default:
          break;
      }
    }

   
   useEffect(()=>{
   },[tasks])
   
    return (
        <Fragment>
             <TaskCrudTitle 
             title={taskCrudTitleStyle.title}              
             type={taskCrudTitleStyle.type}
             className={taskCrudTitleStyle.className}
             />        
             <TaskForm 
              onAdd={handleOnAdd}              
              onSave={handleOnSave} 
              onCancel={handleOnCancel}
              taskToEdit={task}
              editTask={edit}
              />
              <TasksListContainer>
                    <TasksList 
                    tasks={tasks}
                    onTaskAction={handleOnAction}
                    /> 
              </TasksListContainer>
        </Fragment>
    )
}

export default TaskCrud;
