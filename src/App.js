import React from 'react';
import './App.css';
import TodoList from './components/TodoList.js'


class App extends React.Component{

  render(){
    return(
      <div className="todo-list">
        <TodoList/>
      </div>
    )
  }
}

export default App;
