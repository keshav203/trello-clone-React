import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./reducers";

const store = createStore(RootReducer, applyMiddleware())
export default store;