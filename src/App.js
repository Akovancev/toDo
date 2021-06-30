import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      allItems: []
    }

    this.handleChangeForm = this.handleChangeForm.bind(this)
    this.handleChangeList = this.handleChangeList.bind(this)
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

  componentDidMount() {
    document.addEventListener('keydown', this.addItem)
  }

  componentWillUnmount(event) {
    event.preventDefault()
    document.removeEventListener('keydown', this.addItem)
  }

  render() {
    return (
      <div className='App'>
        <TodoForm newItem={this.state.newItem} onChange={this.handleChangeForm} />
        <TodoList allItems={this.state.allItems} onChange={this.handleChangeList} />
      </div>
    );
  }
}
