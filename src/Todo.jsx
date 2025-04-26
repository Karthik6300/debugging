import React, { useState } from "react";
// import App from "./assets/App.css";
// import Styles from "./App.css".
import "./App.css";
function Todo(){
    const [newData , setNewTodo] = useState("")

    return(
        <>
        <h1>Todo Management</h1>
        <input type="text" onChange={(e)=>setNewTodo(e.target.value)} />
        <button>AddTask</button>
        <ul>
            <li>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </li>
        </ul>
        </>
    )

}

export default Todo;