import {
  GET_TODO_DATA,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  DELETE_INDIVIDUAL_TODO
} from "../actions";

const initialState = {
  todos: [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },

    {
      task: "Go Grocery Shopping",
      id: 1528817084358,
      completed: false
    },

    {
      task: "Bake Cookies",
      id: 1528817084359,
      completed: false
    }
  ],
  todo: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_DATA:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            id: Date.now(),
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todoItem => {
          if (todoItem === action.payload) {
            return {
              ...action.payload,
              completed: !todoItem.completed
            };
          }
          return todoItem;
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todoItem => todoItem.completed === false)
      };
    case DELETE_INDIVIDUAL_TODO:
      return {
        ...state,
        todos: state.todos.map(todoItem => {
          if (action.payload.id === todoItem.id) {
            return {
              ...action.payload,
              task: ""
            };
          }
          return todoItem;
        })
      };
    default:
      return state;
  }
};
