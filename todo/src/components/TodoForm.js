import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodoData } from "../actions";
import "./TodoStyling.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const todo = {
      id: Date.now(),
      task: this.state.todo,
      completed: false
    };

    return this.props.addTodoData(todo);
  };

  render() {
    return (
      <div>
        <h3>Add Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              name="todo"
              placeholder="What's next on the list?"
              onChange={this.onChange}
              value={this.state.todo}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodoData }
)(TodoForm);
