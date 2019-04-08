export const GET_TODO_DATA = "GET_TODO_DATA";
export const ADD_TODO = "ADD_TODO";

export const getTodoData = todos => {
  // Fill in this function
  console.log(todos);
  return {
    type: GET_TODO_DATA,
    payload: todos
  };
};

export const addTodoData = todo => {
  // Fill in this function
  console.log(todo);
  return {
    type: ADD_TODO,
    payload: todo
  };
};
