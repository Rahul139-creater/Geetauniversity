import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  const updateTask = updated => setTasks(tasks.map(t => t.id === updated.id ? updated : t));
  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));
  const toggleComplete = id => setTasks(tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t));

  return (
    <div className="container">
      <h2>React To-Do App</h2>
      <TaskForm onSubmit={addTask} />
      <TaskList
        tasks={tasks}
        onUpdate={updateTask}
        onDelete={deleteTask}
        onToggle={toggleComplete}
      />
    </div>
  );
}

export default App;
