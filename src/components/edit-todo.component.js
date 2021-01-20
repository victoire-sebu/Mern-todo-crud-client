import React, { Component } from "react";
import axuios from "axios";
import axios from "axios";

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/" + this.props.match.params.id)
      .then((responsse) => {
        this.setState({
          todo_description: responsse.data.todo_description,
          todo_responsible: responsse.data.todo_responsible,
          todo_priority: responsse.data.todo_priority,
          todo_completed: responsse.data.todo_completed,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value,
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value,
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value,
    });
  }
  onChangeTodoCompleted(e) {
    this.setState({
      todo_completed: !this.state.todo_completed,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log(`Form submited:`);
    // console.log(`Todo Description: ${this.state.todo_description}`);
    // console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    // console.log(`Todo Priority: ${this.state.todo_priority}`);
    // console.log(`Todo Completed: ${this.state.todo_completed}`);

    const obj = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed,
    };

    axios
      .post(
        "http://localhost:4000/todos/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => {
        console.log(res.data);
      });

    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
        <div style={{ marginTop: 30 }}>
          <h3>Edit Todo</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                value={this.state.todo_description}
                onChange={this.onChangeTodoDescription}
              />
            </div>
            <div className="form-group">
              <label>Responsible</label>
              <input
                type="text"
                className="form-control"
                value={this.state.todo_responsible}
                onChange={this.onChangeTodoResponsible}
              />
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priorityOption"
                  id="priorityLow"
                  value="Low"
                  checked={this.state.todo_priority === "Low"}
                  onChange={this.onChangeTodoPriority}
                />
                <label className="form-check-label">Low</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priorityOption"
                  id="priorityMediu"
                  value="Medium"
                  checked={this.state.todo_priority === "Medium"}
                  onChange={this.onChangeTodoPriority}
                />
                <label className="form-check-label">Medium</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priorityOption"
                  id="priorityHigth"
                  value="Higth"
                  checked={this.state.todo_priority === "Higth"}
                  onChange={this.onChangeTodoPriority}
                />
                <label className="form-check-label">Higth</label>
              </div>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="completedCheckbox"
                className="form-check-input"
                name="completedCheckbox"
                onChange={this.onChangeTodoCompleted}
                checked={this.state.todo_completed}
                value={this.state.todo_completed}
              />
              <label className="form-check-label" htmlFor="completedCheckbox">
                Completed
              </label>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Update Todo"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default EditTodo;
