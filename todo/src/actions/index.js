export const GET_TODO_DATA = "GET_TODO_DATA";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_INDIVIDUAL_TODO = "DELETE_INDIVIDUAL_TODO";

export const getTodoData = todos => {
  // console.log(todos);
  return {
    type: GET_TODO_DATA,
    payload: todos
  };
};

export const addTodoData = todo => {
  // console.log(todo);
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleTodo = toggledTodo => {
  // console.log(toggledTodo);
  return {
    type: TOGGLE_TODO,
    payload: toggledTodo
  };
};

export const deleteTodo = deletedTodo => {
  // console.log(deletedTodo);
  return {
    type: DELETE_TODO,
    payload: deletedTodo
  };
};

export const deleteIndividualTodo = specificTodo => {
  // console.log(specificTodo);
  return {
    type: DELETE_INDIVIDUAL_TODO,
    payload: specificTodo
  };
};
