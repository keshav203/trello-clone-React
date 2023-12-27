import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootReducerProps } from "../reducers";
import * as TodoFunctions from "../actions/todo";
import { TodoProps } from "../reducers/todoReducer";

const mapStateToProps = (
  state: RootReducerProps,
  ownProps: any
): TodoProps => ({
  ...ownProps,
  todo: state.todo,
//   path: state.todo.path,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodoFunctions, dispatch);

const TodoContainer = (component: any) => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default TodoContainer;
