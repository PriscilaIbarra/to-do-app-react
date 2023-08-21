import React , {Fragment} from "react"
import { TaskCrudContainerProps } from "../types";

const TaskCrudContainer : React.FC<TaskCrudContainerProps> = ({children})=>{
    return (
       <Fragment>
            {children}
       </Fragment>
    )
}

export default TaskCrudContainer;