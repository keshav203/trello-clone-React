import { CreateReducer } from "../../shared/utils/createReducer";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO_DESCRIPTION ,UPDATE_TODO_STATUS} from "../definitions/todo";
import { ActionProps } from "../../shared/types/action.type";
// import { Todo } from "../../models/Todo/todo.model";


export interface Todo {
  title: string;
  description: string;
  status : string;
}

export interface TodoProps {
  todos?: Todo[];
}

export interface TodoActionProps extends ActionProps {
  payload: {
    todo: Todo;
  };
}

export interface TodoReducerProps extends TodoProps {
  addTodo: (todo: Todo) => TodoActionProps;
}

const initState: TodoProps = {
  todos: [],
};

const todoReducer = CreateReducer(initState, {
  [ADD_TODO](state: TodoProps, action: TodoActionProps): TodoProps {
    const { todo } = action?.payload;
    return {
      ...state,
      todos: [...state.todos!, todo],
    };
  },
  [DELETE_TODO](state: TodoProps, action: TodoActionProps): TodoProps {
    const { todo } = action?.payload;
    const updatedTodoList = state.todos?.filter((item) => item !== todo);
    return {
      ...state,
      todos: updatedTodoList,
    };
  },
  [UPDATE_TODO_DESCRIPTION](state: TodoProps, action: TodoActionProps): TodoProps {
    const { todo } = action.payload;
    const updatedTodoList = state.todos?.map((item: Todo) => {
      if (item.title === todo.title) {
        return {
          ...item,
          description: todo.description || item.description,
        };
      }
      return item;
    });
    return {
      ...state,
      todos: updatedTodoList,
    };
  },
  [UPDATE_TODO_STATUS](state: TodoProps, action: TodoActionProps): TodoProps {
    const { todo } = action.payload;
    const updatedTodoList = state.todos?.map((item: Todo) => {
      if (item.title === todo.title && item.description === todo.description) {
        return {
          ...item,
          status: todo.status,
        };
      }
      return item;
    });
    return {
      ...state,
      todos: updatedTodoList,
    };
  },

});

export default todoReducer;
