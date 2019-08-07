import React from 'react';

import './App.css';

import TodoItem from './components/TodoItem.js';
import todosData from "./components/todosData"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
  }

  render(){
    const todoItems = this.state.todos.map((item) => {
      return(
        <TodoItem key = {item.id} item = {item}/>
      )
    })

    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}
/*const todoItems = todosData.map((item) => {
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
}*/

  
export default App;
