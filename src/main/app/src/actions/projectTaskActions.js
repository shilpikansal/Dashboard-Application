import { GET_ERRORS, GET_TASKS, DELETE, GET_TASK_DETAILS, ENDPOINT} from './types'
import axios from "axios";

export const addProjectTask = (project_task, history) => async dispatch => {
  try {
    await axios.post(ENDPOINT + "api/board", project_task);
    history.push("/projectBoard");
    dispatch({
      type:GET_ERRORS,
      payload:{}
    })

  } catch (e) {
    dispatch({
      type:GET_ERRORS,
      payload:e.response.data
    })
  }
};


export const getAllTasks = (user_id) => async dispatch => {
  const res = await axios.get(ENDPOINT + `api/board/all/${user_id}`);
  dispatch({
    type: GET_TASKS,
    payload: res.data
  });
};


export const getTaskDetails = (pt_id, history) => async dispatch => {
  try {
    const res = await axios.get(ENDPOINT + `api/board/${pt_id}`);
    console.log("result: " + res);
    dispatch({
      type: GET_TASK_DETAILS,
      payload: res.data
    });
  } catch (error) {
    history.push("/");
  }
};

export const deleteProjectTask = pt_id => async dispatch => {
  if (
    window.confirm(
      `You are deleting project task ${pt_id}, this action cannot be undone`
    )
  ) {
    await axios.delete(ENDPOINT + `api/board/${pt_id}`);
    dispatch({
      type: DELETE,
      payload: pt_id
    });
  }
};
