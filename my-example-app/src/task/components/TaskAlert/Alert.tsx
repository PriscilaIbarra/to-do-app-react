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
            <p className={"alert-text"}>
                {msg.content}
            </p>
            <button
            className={"custom-cancel-icon-button left"}            
            >
                x
            </button>
        </div>
    )
}

export default Alert;