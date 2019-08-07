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
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id){
    this.setState((prevState) => {  
      const updatedData = prevState.todos.map((todo) => {
        if (todo.id === id){
          todo.completed = !todo.completed 
          /*
            above, 
            - this is not good practice. don't directly modify the original todo object.
            - should create a copy of the original todo before making any modifications.
          */ 
        }
        return todo // need to return b/c that's how the map() function works
        // Whatever you return from the callback function is the value that will be 
        // put into the new array at the same index as the item you're looking at from the original array.
      })
      return{
        todos: updatedData
      }
    })
  }

  render(){
    const todoItems = this.state.todos.map((item) => {
      return(
        <TodoItem key = {item.id} item = {item} handleChange = {this.handleChange}/>
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
