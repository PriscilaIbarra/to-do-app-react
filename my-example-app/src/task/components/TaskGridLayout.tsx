import React from "react"
import { TaskGridLayoutProps } from "../types/index"

const TaskGridLayout : React.FC <TaskGridLayoutProps>= ({children})=>{
    return(
        <div
        className="row"
        >
            <div
            className="
            md-column 
            sm-column 
            xs-column
            "
            />
            <div
            className="
            md-column 
            sm-column 
            xs-column"
            >
                {children}
            </div>
            <div
            className="
            md-column 
            sm-column 
            xs-column"
            />
        </div>
    )
}

export default TaskGridLayout;