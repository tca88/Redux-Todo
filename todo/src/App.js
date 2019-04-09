import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Todos from "./components/Todos";
import todos from "./reducers";
import "./App.css";

const middleware = [thunk];

// This line instantiates our central Redux store.
// The `createStore` function receives the reducer
// that is responsible for updating the store, along
// with any initial state that we may want the store
// to start out with (which is none in this case).
const store = createStore(
  todos,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <div className="container">
            <div className="App">
              <h1>Todo List</h1>
              <Todos />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
