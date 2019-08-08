import React from 'react';

import './App.css';

import TodoList from './components/TodoList.js'
import TodoItem from './components/TodoItem.js';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todo: ""
    }
    //this.handleChange = this.handleChange.bind(this)
  }
  

  render(){
    //let todoItems = <TodoItem handleChange = {this.handleChange} value = {this.state.todo}/>

    return(
      <div className="todo-list">
        <TodoList/>
      </div>
    )
  }
}

export default App;
