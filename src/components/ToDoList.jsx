import React from 'react'

// components
import ToDoItem from './ToDoItem'

export default function ToDoList({todoList,setTodoList}) {

    function setTodoDone(id){
        // console.log("compeleting", id);
        setTodoList( todoList.map( todoListItem =>{
            if(todoListItem.id===id)
                todoListItem.completed= !todoListItem.completed;
            return todoListItem;
        }  ) )
    }

    function deleteTodo(id){
        // console.log("deleting ",id);
        setTodoList( todoList.filter( todoListItem =>{
            return (todoListItem.id!==id)
               
        }  ) )
    }

    return (
        <div className="todo-list">
            <ul>
                {/* { console.log('todolist', todoList)} */}
                {
                    todoList.map((toDoItem_)=>( 
                        <ToDoItem 
                            todoItem={toDoItem_} 
                            key={toDoItem_['id']} 
                            setTodoDone={setTodoDone} 
                            deleteTodo={deleteTodo}
                        />))
                }
            </ul>
        </div>
    )
}

