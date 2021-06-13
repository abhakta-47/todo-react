import React,{useState} from 'react'

const AddForm=({todoList, setTodoList})=>{

    const [addTaskValue, setAddTaskValue]=useState('');

    const addFormSubmitHandler = (e)=>{
        e.preventDefault();
        let todoItemId=0;
        if (todoList.length!==0) {
            todoItemId=todoList[todoList.length-1]['id']+1;
        }
        setTodoList([ ...todoList,{'name':addTaskValue,'completed':false,'id':todoItemId}]);
        setAddTaskValue('');
        // e.target.value.set('')
    };

    return(
        <form className="add-task-form" onSubmit={addFormSubmitHandler}>
            <input onChange={ e => setAddTaskValue(e.target.value)} type="text" name="addTask" placeholder="Add task" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default  AddForm;