import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import tasksReducer from './tasksReducer'
import userReducer from './userReducer'

export default combineReducers(
  {
    errors: errorsReducer,
    project_tasks: tasksReducer,
    user:userReducer
  }
)
