import React from 'react';
import './TodoItem.css';

// Displays items

class TodoItem extends React.Component{
    constructor(props){
        super(props)

        this.createTasks = this.createTasks.bind(this)
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
    }


    createTasks(item){
        return (
            <div className = "taskRow">
                <li key = {item.key}>
                    {console.log(item.key)}
                    {item.text}        
                    <button 
                        onClick = {() => this.delete(item.key)}>
                        Remove
                    </button>    

                    <button 
                        onClick = {() => this.edit(item.key)}>
                        Edit
                    </button> 
                </li>
            </div>
            
        )
        /*return <input type = "text" 
                    value = {item.text}
                    //onChange = {() => this.props.update(item.key)}
        
                    //onClick = {() => this.delete(item.key)}
                    key = {item.key}
                    onChange = {() => {
                        console.log("changing text")
                        this.update(item.key)
                    }}>
                </input>*/
    }

    delete(key){
        this.props.handleDelete(key)
    }

    edit(key){
        
        this.props.handleEdit(key)
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