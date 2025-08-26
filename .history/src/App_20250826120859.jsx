import React, { useState } from 'react';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <h2>Список задач</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите задачу"
        style={{ width: '100%', padding: '4px' }}
      />
      <button onClick={addTask} style={{ marginTop: '8px', width: '100%' }}>
        Добавить задачу
      </button>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;