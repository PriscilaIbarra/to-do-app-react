import React from "react"
import { ActionTypes } from "../../actionTypes"
import { TaskCardProps, Action } from "../../types/index"
import '../TaskCard/taskcard.css'

const TaskCard : React.FC<TaskCardProps>  = ({task,onAction})=>{

    const performAction = (actionType:ActionTypes)=>{
        let action : Action = {
            type: actionType,
            payload: task
        }
        onAction(action)
    }
    
    return(
           <div
           className="custom-note-card-primary"
           >
                <h4
                className="custom-note-title-primary"
                >
                 {task.title}
                </h4>
                <textarea
                className="custom-text-note-primary"                
                >
                {task.description} 
                </textarea>
                <button 
                className="custom-edit-button left"
                onClick={(e)=>performAction(ActionTypes.EDIT)}
                >Edit</button>
                <button 
                className="custom-delete-button right"
                onClick={(e)=>performAction(ActionTypes.DELETE)}
                >Delete</button>
           </div>
    )
}

export default TaskCard;