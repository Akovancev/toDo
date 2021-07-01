import React from 'react'

const { Provider, Consumer} = React.createContext()

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
            <Provider value={{ isAuth: this.state.isAuth, Auth: this.Auth }}>
                {this.props.children}
            </Provider>
        )
    }
}


export { ContextProvider, Consumer };