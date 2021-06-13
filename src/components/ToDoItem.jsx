import React from 'react'

export default function ToDoItem({todoItem, setTodoDone, deleteTodo}) {


    return (
    <li className={`todo-item ${todoItem.completed ? "todo-done" : ''}`}>
        <div className="task-name">{todoItem.name}</div>
        <button onClick={()=>setTodoDone( todoItem.id)}><i className="fas fa-check done-btn"></i></button>
        <button onClick={()=>deleteTodo(todoItem.id)}><i className="fas fa-trash remove-btn"></i></button>
    </li>
    )
}
