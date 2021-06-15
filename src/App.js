// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchForm from './components/SearchForm'
import ToDoList from './components/ToDoList'
import AddForm from './components/AddForm'

function App() {

  // const [taskList,setTaskList] = useState([])

  const [todoList,setTodoList]=useState([]);
  
  return (
    <div className="app">
      <header>
        ToDo App
        {/* <h1>ToDo App</h1> */}
      </header>
      <div id="container">
        <SearchForm/>
        <ToDoList todoList={todoList} setTodoList={setTodoList} />
        <AddForm todoList={todoList} setTodoList={setTodoList}/>
      </div>
    </div>
  );
}

export default App;
