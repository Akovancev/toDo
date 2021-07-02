import React from "react";
import { Switch, Route } from "react-router-dom";
import Todo from './components/Todo/Todo'
import { About } from "./components/About/About";
import { Navigation } from "./components/Navigation/Navigation";
import { Authorization } from "./components/Authorization/Authorization";
import { PrivateRoute } from "./PrivateRoute";
import { Message } from "./components/Message/Message";
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <PrivateRoute path="/todo">
            <Todo />
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/">
            <Authorization />
          </Route>
        </Switch>
      </div>
    );
  }
}
