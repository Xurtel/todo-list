import React from 'react';
import './TodoList.css'
import TodoItem from './TodoItem'
import EditBox from './EditBox'

class TodoList extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        //this.updateItem = this.updateItem.bind(this)
        this.editItem = this.editItem.bind(this)
    }

    addItem(event){
        if (this.inputElement.value !== ""){ // don't add blank text
            const newItem = {
                text: this.inputElement.value,
                key: Date.now(),
                isEditable: false
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
        // create a new array with all elements that don't have the same key (makes sense)
        const filteredItems = this.state.items.filter((item) => {
            return (item.key !== key)
        })

        this.setState({
            items: filteredItems
        })
    }


    editItem(key){
        // first find the item that's going to be edited
        const selectedItem = this.state.items.find((item) => {
            return (item.key === key)
        })
        console.log(selectedItem)
        console.log(this.state.items)

        // allow user to edit the item
        // if isEditable is true, render an input box and allow user to input, then copy that over to li element
        selectedItem.isEditable = true
        if (selectedItem.isEditable === true){

        }

        //selectedItem.text = "hello" + selectedItem.key

        /*var index = this.state.items.map((item) => {
            return item.key
        }).indexOf(key)
        console.log(index)
         console.log(this.state.items[index])*/

        //this.state.items[index].text = selectedItem.text


        // update the state; item with inputted text and change editable back to false
        this.setState((prevState) => ({
            items: prevState.items.map((item) => 
                item.key === key ? {text: selectedItem.text, key: item.key, isEditable: false} : item
            )
        }))
    }

    /*updateItem(key){
        console.log(key)
        console.log(this.state.items.indexOf(key))
        var index = this.state.items.map((item) => {
            return item.text
        }).indexOf(key)

        console.log(index)

        this.state.items.forEach((item) => {
            if (item.key === key){
                console.log(this.state.items.indexOf(item.key))
                const updatedItem = {
                    text: item.text,
                    key: key
                }
                
                this.setState((prevState) => {
                    return {
                        items: prevState.items.concat(updatedItem)
                    }
                })
            }
        })

      
        const updatedItem = {
            text: this.state.items[key],
            key: Date.now()
        }
        
        this.setState()
}*/

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
                        handleDelete = {this.deleteItem}
                        handleEdit = {this.editItem}/>
                
                <EditBox />

            </div>
        )
    }
}

export default TodoList;