import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getTodoData,
  toggleTodo,
  deleteTodo,
  deleteIndividualTodo
} from "../actions";
import TodoForm from "./TodoForm";
import "./TodoStyling.css";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      task: "",
      id: "",
      completed: false
    };
  }

  toggleItem = (e, item) => {
    return this.props.toggleTodo(item);
  };

  deleteIndividualItem = (e, item) => {
    return this.props.deleteIndividualTodo(item);
  };

  updateItem = (e, item) => {
    return this.props.updateTodo(item);
  };

  deleteItem = () => {
    return this.props.deleteTodo(this.state.todos);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          {this.props.todos.map(todo => {
            if (!todo.task.length) return null;
            return (
              <div
                className="todo-container"
                onClick={e => {
                  this.toggleItem(e, todo);
                }}
                key={todo.id}
              >
                <p className={`todo-item${todo.completed ? " completed" : ""}`}>
                  {todo.task}
                </p>
                {todo.completed && (
                  <button
                    className={`delete-icon${todo.completed ? " include" : ""}`}
                    onClick={e => {
                      this.deleteIndividualItem(e, todo);
                    }}
                  >
                    X
                  </button>
                )}
                {todo.completed && (
                  <button
                    className={`delete-icon${todo.completed ? " include" : ""}`}
                    onClick={e => {
                      this.deleteIndividualItem(e, todo);
                    }}
                  >
                    Edit
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <TodoForm />
        <button onClick={this.deleteItem}>Clear All Completed</button>
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
  { getTodoData, toggleTodo, deleteTodo, deleteIndividualTodo }
)(Todos);
