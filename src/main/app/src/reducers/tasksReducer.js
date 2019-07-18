import { GET_TASKS, DELETE, GET_TASK_DETAILS } from './../actions/types'

const initialState={
  project_tasks:[],
  project_task:{}
};

export default function(state=initialState,action){
  switch (action.type) {
    case GET_TASKS:
      return { ...state,
        project_tasks: action.payload
      };

    case DELETE:
    return{
      ...state,
      project_tasks: state.project_tasks.filter(
        project_task => project_task.id !== action.payload
      )
    };

    case GET_TASK_DETAILS:
     return {
       ...state,
       project_task: action.payload
     };


    default:
    return state;

  }
}
