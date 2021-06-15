import React from 'react'

export default function ToDoItem({todoItem, setTodoDone, deleteTodo}) {


    return (
    <li className={`todo-item ${todoItem.completed ? "todo-done" : ''}`}>
        <button className="done-btn" onClick={()=>setTodoDone( todoItem.id)}>
            {/* <i className="fas fa-check done-btn"></i> */}
        </button>
        <div className="task-name">{todoItem.name}</div>
        <button className="remove-btn" onClick={()=>deleteTodo(todoItem.id)}><i className="fas fa-trash remove-btn"></i></button>
    </li>
    )
}
