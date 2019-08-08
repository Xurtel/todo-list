import React from 'react';

class TodoList extends React.Component{
    render(){
        return(
            <div className = "todoListMain">
                <div className = "header">
                    <form>
                        <input placeholder = "What do you have to do?"></input>
                        <button type = "submit">Add task</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default TodoList;