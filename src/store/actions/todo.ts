// import { Todo } from "../../models/Todo/todo.model";
import { ADD_TODO,DELETE_TODO, UPDATE_TODO_DESCRIPTION,UPDATE_TODO_STATUS } from "../definitions/todo";
// import { Cart } from "../../models/Cart/cart.model";
import { TodoActionProps, TodoProps } from "../reducers/todoReducer";
export interface Todo {
  title: string;
  description: string;
  status:string
}
export const addTodos = (todo: Todo): TodoActionProps => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export const deleteTodo = (todo: Todo): TodoActionProps => ({
  type: DELETE_TODO,
  payload: {
    todo,
  },
});
export const updateTodo = (todo: Todo): TodoActionProps => ({
  type: UPDATE_TODO_DESCRIPTION,
  payload: {
    todo,
  },
});
export const updateStatusTodo = (todo: Todo): TodoActionProps => ({
  type: UPDATE_TODO_STATUS,
  payload: {
    todo,
  },
});
