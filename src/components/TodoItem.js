import React from 'react';

import './TodoItem.css';

class TodoItem extends React.Component{

    createTasks(item){
        return <li key = {item.key}>{item.text}</li>
    }

    render(){
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks) //create a list element for every item in array

        return (
            <ul className = "theList">
                {listItems}
            </ul>
        )
    }
}


/*function TodoItem(props){

    const completedStyle = {
        color: "#cdcdcd",
        fontStyle: "italic",
        textDecoration: "line-through"    
    }

    return(
        <div className = "todo-item">
            <input 
                type = "checkbox" 
                checked = {props.item.completed}
                onChange = {() => props.handleChange(props.item.id)}
                //above, 
                //    - We need to create an anonymous inline function 
                //    b/c we don't get to decide the parameter being passed to the event handler.
                //    - (The browser will always pass the event objects to event handlers).
                //    - We want to pass the id of the todo to handleChange, not the event object. 
                //    - We could take the event as a parameter if we wanted, but we didn't since
                //    we don't use it. - e.g: (event) => props.handleChange(props.item.id)
                //    - This allows us to pass whatever value we want to our function, instead of being
                //    forced to accept the event object.
                
            />

            <input type = "text" onChange = {() => props.handleChange}/>
            <p style = {props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}*/

export default TodoItem;