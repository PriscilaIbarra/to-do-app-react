import React from "react"
import TaskCrud from "../components/TaskCrud"
import TaskGridLayout from "../components/TaskGridLayout"
import TaskCrudContainer from "../components/TaskCrudContainer"

const TaskCrudView : React.FC = ()=>{
    return(
        <TaskGridLayout>
                <TaskCrudContainer>
                    <TaskCrud/>
                </TaskCrudContainer>
        </TaskGridLayout>
    )
} 

export default TaskCrudView


