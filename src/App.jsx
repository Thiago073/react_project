import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


import Tasks from './components/Tasks';
import './App.css';
import AddTask from './components/AddTask';


const App = () => {


    const [tasks, setTask] = useState([{

            id: "1",
            title: "Estudar React.js",
            completed: false

        },

        {

            id: "2",
            title: "Ler Livros",
            completed: true,

        },
    ]);

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) return { ...task, completed: !task.completed}
            
            return task;
        });
        setTask(newTasks);
    };

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [...tasks, {
            title: taskTitle,
            id: uuidv4(),
            completed: false
        }];
        setTask(newTasks);
    }

    return ( 
        <>
            <div className = "container" >
                <AddTask handleTaskAddition = { handleTaskAddition } /> 
                <Tasks tasks = { tasks } handleTaskClick={handleTaskClick}/> 
            </div > 
        </>
    );
};

export default App;