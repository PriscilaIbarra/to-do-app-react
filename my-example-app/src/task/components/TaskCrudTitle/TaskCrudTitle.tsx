import React, { createElement, Fragment } from "react"
import { TaskCrudTitleProps } from "../../types/index";


const TaskCrudTitle : React.FC<TaskCrudTitleProps> = ({title,type,className})=>{
  return (
     <Fragment>
         { createElement(type,{class:className},title) }
     </Fragment>
  )
}

export default TaskCrudTitle