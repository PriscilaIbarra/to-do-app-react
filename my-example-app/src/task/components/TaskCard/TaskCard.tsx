import React from "react"
import { ActionTypes } from "../../actionTypes"
import { TaskCardProps, Action} from "../../types/index"
import '../TaskCard/taskcard.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

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
                disabled={true}
                className={task.complete?"custom-complete-text-note text-area-primary":"custom-text-note-primary text-area-primary"}                
                >
                {task.description} 
                </textarea>
                <button 
                className={"custom-edit-button left"}
                onClick={(e)=>performAction(ActionTypes.EDIT)}
                hidden={task.complete}
                >Edit</button>
                <span
                className="tooltiptext tooltip-set-complete"
                data-hover={task.complete ? "Pendant":"Set as complete"}
                >
                    <TaskAltIcon
                    className="custom-check-button right"
                    onClick={(e)=>performAction(ActionTypes.SET_AS_COMPLETE)}
                    />
                </span>
                <button 
                className="custom-delete-button right"
                onClick={(e)=>performAction(ActionTypes.DELETE)}
                >Delete</button>
           </div>
    )
}

export default TaskCard;