import React from 'react';

import './App.css';

import TodoItem from './components/TodoItem.js';
import todosData from "./components/todosData"

const todoItems = todosData.map((item) => {
    return(
        <TodoItem key = {item.id} item = {item}/>
    )
})

function App() {
  return (
    <div className = "todo-list">
      {todoItems}
    </div>
  )
}

  
export default App;
