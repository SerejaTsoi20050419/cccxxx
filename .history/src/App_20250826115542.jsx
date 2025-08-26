import React, { useState } from 'react';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date() 
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;