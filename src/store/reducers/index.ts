import { combineReducers } from "redux";
import todoReducer, { TodoProps } from "./todoReducer";
export interface RootReducerProps {
	todo:TodoProps,	
}

const RootReducer = combineReducers<RootReducerProps>({	
	todo:todoReducer,
});

export default RootReducer;