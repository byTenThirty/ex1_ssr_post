import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/todo/TodoInput';
import TodoList from './components/todo/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (value) => {
    setTodos([...todos, { id: Date.now(), value: value, done: false, }]);
  };

  const handleChangeDone = (id) => {
    const index = todos.findIndex(t => t.id === id);
    setTodos(prev => [...prev.slice(0, index), { ...prev[index], done: !prev[index].done }, ...prev.slice(index + 1)]);
  };

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="App">
      <TodoInput onSubmit={handleSubmit} />
      <TodoList todos={todos} onChangeDone={handleChangeDone} onDelete={handleDelete} />
    </div>
  );
}

export default App;
