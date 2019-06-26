import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import tasksReducer from './tasksReducer'

export default combineReducers(
  {
    errors: errorsReducer,
    project_tasks: tasksReducer
  }
)
