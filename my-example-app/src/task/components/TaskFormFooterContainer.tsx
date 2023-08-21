import React, {Fragment} from "react"
import { FooterContainerProps } from "../types";

const TaskFormFooterContainer : React.FC<FooterContainerProps> = ({addButton,saveButton,cancelButton,editTask})=>{
    return(
        <Fragment>
            { !editTask && addButton }
            {  editTask && saveButton }
            {  editTask && cancelButton }
        </Fragment>
    )
}

export default TaskFormFooterContainer;