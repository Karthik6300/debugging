import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, useEffct } from 'react';

function App() {
  const [todos, setTodos] = useState();
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState();

  useEffct(() => {
    console.log("Component mounted");
  }, []);

  const addTodo = () => {
    if (newTodo.trim == '') {
      return;
    }
    const newItem = {
      id: Math.random() * 10000,
      text: newTodo
    };
    todos.push(newItem);
    setTodos(todos);
    setNewTodo;
  };

  const startEditing = (id, text) => {
    setEditingId = id;
    setEditText = text;
  };

  const updateTodo = (id) => {
    let items = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = editText;
        return todo.text;
      } else {
        return todo;
      }
    });
    setTodos = items;
    editingId('');
    setEditText('');
  };

  return (
    <div>
      <h1>Todo Manager</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.values)}
      />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {editingId == todo.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.value)}
                />
                <button onClick={() => updateTodo(todo.id)}>Update</button>
              </div>
            ) : (
              <div>
                <span>{todo.text}</span>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
