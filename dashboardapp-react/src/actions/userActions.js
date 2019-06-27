import axios from "axios";
import { GET_USER_DETAILS, VALID_USER, INVALID_USER } from './types'

export const validateUser = (username, password) => async dispatch => {
    const res=await axios.get(`http://localhost:8080/api/user/username=${username}&&password=${password}`);
    if(typeof(res.data)=="string")
    {
      dispatch({
        type:INVALID_USER,
        payload:{
          message: res.data}})
    }
    else {
      dispatch({
        type:VALID_USER,
        payload:{ user:res.data}})
    }

}

export const getUserDetails=() => dispatch => {
     dispatch({
        type:GET_USER_DETAILS,
        payload:""})
}
