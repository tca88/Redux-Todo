import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodoData } from "../actions";
import "./TodoStyling.css";

class Todos extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.todos.map(todo => (
          <div className="todo-item">
            <p>{todo.task}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { getTodoData }
)(Todos);
