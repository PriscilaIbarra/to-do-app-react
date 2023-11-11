import React, { Fragment } from "react";
import { TaskAlertProps } from "../../types";
import Alert from "../TaskAlert/Alert"

const TaskAlert : React.FC<TaskAlertProps> = ({show, msg})=>{
    return (
        <Fragment>
          { show && <Alert msg={msg} /> }
        </Fragment>
    )
}

export default TaskAlert;
