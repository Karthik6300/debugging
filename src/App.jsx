// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState();
  // const [deleteText, setDelete] = useState();

  useEffect(() => {
    console.log("Component mounted");
    addTodo()
  },[]);

  const addTodo = () => {
    if (newTodo.trim() === "") {
      return;
    }
    const newItem = {
      id: Math.random() * 10000,
      text: newTodo,
    };
    todos.push(newItem);
    setTodos([...todos, newItem]);
    setNewTodo("");
  };

  const startEditing = (id, text) => {
    setEditingId (id)
    setEditText(text);
  };
  // const deleteTodo = (id)=>{
  //   setDelete(id)
  //     }

  const updateTodo = (id) => {
    let items = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = editText;
        return todo;  
      } else {
        return todo;
      }
    });
    setTodos(items);
    setEditingId("");
    setEditText("");
  };

  return (
    <div>
      <h1>Todo Manager</h1>
      <input
        id="input1"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
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
                <button onClick={()=> startEditing(todo.id ,todo.text)}>Edit</button>
                <button >Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
