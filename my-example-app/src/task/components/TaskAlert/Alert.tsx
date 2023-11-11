import React from "react";
import  { AlertProps } from "../../types/index";
import "../TaskAlert/taskAlert.css"

const alertStyle = {
    width:'50%',
    height:'40px'   
}

const Alert : React.FC <AlertProps> = ({ msg })=>{
    return (
        <div
        style={alertStyle}
        className={msg.severity.level}        
        >
            {msg.content}
            <button
            className={"custom-cancel-icon-button"}            
            >
                x
            </button>
        </div>
    )
}

export default Alert;