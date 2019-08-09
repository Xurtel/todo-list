import React from 'react';

import './TodoList.css'
import TodoItem from './TodoItem'



class TodoList extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(event){
        if (this.inputElement.value !== ""){
            const newItem = {
                text: this.inputElement.value,
                key: Date.now()
            }

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            })
        }

        this.inputElement.value = "";
        console.log(this.state.items)

        event.preventDefault(); // don't have everything reload in form
    }

    deleteItem(key){
        const filteredItems = this.state.items.filter((item) => {
            return (item.key !== key)
        })

        this.setState({
            items: filteredItems
        })
    }

    render(){
        return(
            <div className = "todoListMain">
                <div className = "header">
                    <form onSubmit ={this.addItem}>
                        <input ref = {(a) => {
                            this.inputElement = a
                        }}
                            placeholder = "Enter task"></input>
                        <button type = "submit">Add</button>
                    </form>
                </div>

                <TodoItem entries = {this.state.items}
                        delete = {this.deleteItem}/>

            </div>
        )
    }
}

export default TodoList;