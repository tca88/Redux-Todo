import { GET_TODO_DATA, ADD_TODO } from "../actions";

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
      // Fill in the body of this case
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      // Fill in the body of this case
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};
