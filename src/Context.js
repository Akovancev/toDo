import React from 'react'

const { Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component {
    state = {
        isAuth: false
    }

    Auth = () => {
        this.setState( {
            isAuth: true
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