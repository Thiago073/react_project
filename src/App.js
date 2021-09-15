import React, {useState} from 'react'

import Tasks from './components/Tasks'
import './App.css'

const App = () => {
  
  
  const [tasks, setTask] = useState([
    {
    
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

  return(
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;
