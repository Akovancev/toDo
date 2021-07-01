import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Todo from './components/Todo/Todo'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Sign in</NavLink>
        </div>
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/about">
            About
          </Route>
          <Route path="/">
            Sign in
          </Route>
        </Switch>
      </div>
    );
  }
}
