import React, {Fragment, useState,} from "react";
import { ActionTypes } from "../actionTypes/index";
import { Action } from "../types/index";
import { TasksArray, Task } from "../types/index";
import TaskForm from "./TaskForm/TaskForm";
import TasksListContainer from './TasksListContainer';
import TasksList from "./TasksList";
import TaskCrudTitle from "./TaskCrudTitle/TaskCrudTitle";
import "./TaskCrudTitle/taskcrudtitle.css"

const TaskCrud : React.FC  = ()=>{

    const [tasks, setTasks] = useState<TasksArray>([])
    const [task, setTask] = useState<Task>({
      title:'',
      description:''
    })
  
    const [edit,setEditTask] = useState<boolean>(false);
  
    const handleOnAdd = (task:Task)=>{
      let oldTasks : TasksArray = [...tasks]
      oldTasks.push(task);
      setTasks(oldTasks)
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
        description:''
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
        default:
          break;
      }
    }
  
    return (
        <Fragment>
              <TaskCrudTitle 
              title={'Tareas Pendientes'}              
              type={'h1'}
              className={'title-primary'}/>        
              <TaskForm 
              onAdd={handleOnAdd}
              taskToEdit={task}
              editTask={edit}
              onSave={handleOnSave} 
              onCancel={handleOnCancel}
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