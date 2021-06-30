import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      allItems: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(event) {
    if (event.code == 'Enter') {
      const oldItems = this.state.allItems
      const oldItem = this.state.newItem
      this.setState({
          newItem: '',
          allItems: [{ name: oldItem}, ...oldItems]
      })
      debugger
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.addItem)
  }

  render() {
    return (
      <div className='App'>
        <input value={this.state.newItem} onChange={this.handleChange}/>
        {this.state.allItems.map((item) => {
          return (
            <div>
              {item.name}
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;