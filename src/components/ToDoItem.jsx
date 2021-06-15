import React from 'react'

export default function ToDoItem({todoItem, setTodoDone, deleteTodo}) {

    function checkedIcon(){
    if(todoItem.completed)
        return <i className="fas fa-check"></i>;
    }

    return (
    <li className={`todo-item ${todoItem.completed ? "todo-done" : ''}`}>
        <button className="done-btn" onClick={()=>setTodoDone( todoItem.id)}>
        {checkedIcon()}
        </button>
        <div className="task-name">{todoItem.name}</div>
        <button className="remove-btn" onClick={()=>deleteTodo(todoItem.id)}><i className="fas fa-trash remove-btn"></i></button>
    </li>
    )
}
