import React from "react";
import { Switch, Route } from "react-router-dom";
import Todo from './components/Todo/Todo'
import { About } from "./components/About/About";
import { Navigation } from "./components/Navigation/Navigation";
import { Authorization } from "./components/Authorization/Authorization";
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Authorization />
          </Route>
        </Switch>
      </div>
    );
  }
}
