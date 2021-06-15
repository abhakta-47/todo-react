// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm'
import ToDoList from './components/ToDoList'
import AddForm from './components/AddForm'

function App() {

  const [todoList,setTodoList]=useState([]);

  useEffect(()=>{
    const rawData=localStorage.getItem("todoList");
    const savedTodoList = JSON.parse(rawData);
    // console.log('called 2', savedTodoList);
    setTodoList(savedTodoList);
  },[])
  
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    // console.log('called 1');
  },[todoList] )

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
