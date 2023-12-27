import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';
export interface AppState {
    count: number;    
  }
const initialState:AppState = {
    count: 0,
  };
// Define our action types
export enum ActionType {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
  }
  interface IncrementAction {
    type: ActionType.INCREMENT;
  }
  
  interface DecrementAction {
    type: ActionType.DECREMENT;
  }
  
  export type Action = IncrementAction | DecrementAction;
  

  export function reducer(state = initialState, action: Action): AppState {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  export function increment() {
    return { type: 'INCREMENT' };
  }
  
  export function decrement() {
    return { type: 'DECREMENT' };
  }

   const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk),
    devTools: true,
  })

export default store;
