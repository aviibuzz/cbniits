import { combineReducers } from 'redux'
import todoReducer from './toDoReducer'


const todoApp = combineReducers({
  todoReducer,
})

export default todoApp