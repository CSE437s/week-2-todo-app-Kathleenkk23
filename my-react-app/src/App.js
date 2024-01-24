import React, { useState } from 'react';
import './App.css';
import ToDoTiles from './ToDoTiles';
import InputField from './InputField';

function App() {
  const [taskName, setTaskName] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const addTodo = () => {
    if (taskName.trim() !== '') {
      setTodos([...todos, taskName]);
      setTaskName('');
    }
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <InputField
        values={taskName}
        handleChange={handleInputChange}
        handleAddTodo={addTodo}
      />
      <ToDoTiles todos={todos} />
    </div>
  );
}

export default App;
