import React, { Fragment } from "react"
import { TasksListContainerProps } from "../types/index"

const TasksListContainer:React.FC <TasksListContainerProps> = ({children})=>{
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default TasksListContainer