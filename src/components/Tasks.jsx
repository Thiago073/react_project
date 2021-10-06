import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion}) => {

    return (
        // FRAGMANT <> </>
        <>
            {tasks.map(task =>

                <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>

            )}
        </>
    )
}

export default Tasks;
