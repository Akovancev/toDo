import React from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      allItems: []
    }

    this.handleChangeForm = this.handleChangeForm.bind(this)
    this.handleChangeList = this.handleChangeList.bind(this)
    this.handleDeleteList = this.handleDeleteList.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleChangeForm(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  handleChangeList(e) {
    this.setState((prevState) => {
      let items = [...prevState.allItems]
      items[e.target.name].isChecked = e.target.checked
      return {
        allItems: items
      }
    })
  }

  handleDeleteList(e) {
    this.setState((prevState) => {
      return {
        allItems: prevState.allItems.filter((_, index) => index !== e.target.name)
      }
    })
  }

  addItem(event) {
    if (event.code === 'Enter' && this.state.newItem !== '') {
      const oldItems = this.state.allItems
      const oldItem = this.state.newItem
      this.setState({
        newItem: '',
        allItems: [{ name: oldItem, isChecked: false }, ...oldItems]
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <TodoForm newItem={this.state.newItem} onChange={this.handleChangeForm} onKeyDown={this.addItem} />
        <TodoList allItems={this.state.allItems} onChange={this.handleChangeList} onDelete={this.handleDeleteList} />
      </div>
    );
  }
}
