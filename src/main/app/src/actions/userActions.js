import { GET_USER_DETAILS, VALID_USER, INVALID_USER, GET_ERRORS, LOGOUT } from './types'

import axios from "axios";

const endpoint = (process.env.NODE_ENV !== 'production') ? 'http://localhost:5000/' : 'http://dashboard-shilpikansal.us-east-1.elasticbeanstalk.com/';

export const validateUser = (username, password) => async dispatch => {
    const res=await axios.get(endpoint +`api/user/username=${username}&&password=${password}`);
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


export const registerUser = (user,history) => async dispatch => {
    try {
        await axios.post(endpoint +"api/user/register",user);
      history.push("/");
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

}


export const logoutUser=() => dispatch => {
     dispatch({
        type:LOGOUT,
        payload:""})
}
