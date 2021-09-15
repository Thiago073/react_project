import React from "react";

import Task from "./Task";

const Tasks = ({tasks}) => {
    
    return(
        // FRAGMANT <> </>
        <>
            {tasks.map(task => 

                <Task task={task} />

            )}
        </>
    )
}

export default Tasks;
