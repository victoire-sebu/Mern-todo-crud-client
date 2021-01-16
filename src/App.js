import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import CreateTodo from "./components/creat-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2 className="text-primary">sebu</h2>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/creat" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
