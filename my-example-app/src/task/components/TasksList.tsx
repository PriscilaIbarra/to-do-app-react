import React, { Fragment } from "react"
import { TasksListProps, Task } from "../types";
import   TaskCard  from "./TaskCard/TaskCard";

const TasksList : React.FC <TasksListProps>= ({tasks,onTaskAction})=>{
    return(
        <Fragment>
            {tasks && tasks.map((task:Task)=><TaskCard task={task} onAction={onTaskAction}/>)}
        </Fragment>
    )
}

export default TasksList;