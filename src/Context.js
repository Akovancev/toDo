import React from 'react'

const Context = React.createContext()

class ContextProvider extends React.Component {
    state = {
        isAuth: false
    }

    Auth = () => {
        this.setState((prevState) => {
            return {
                isAuth: prevState.isAuth === true ? false : true
            }
        })
    }

    render() {
        return (
            <Context.Provider value={{ isAuth: this.state.isAuth, Auth: this.Auth }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

let Consumer = Context.Consumer

export { ContextProvider,  Consumer, Context };