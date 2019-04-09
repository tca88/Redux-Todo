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
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    return this.props.addTodoData(this.state.todo);
  };

  render() {
    return (
      <div>
        <h3>Add Todo</h3>
        <form onSubmit={this.addTodo}>
          <div>
            <input
              type="text"
              name="todo"
              placeholder="What's next on the list?"
              onChange={this.handleChange}
              value={this.state.todo}
            />
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodoData }
)(TodoForm);
