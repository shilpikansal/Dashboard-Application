import { GET_USER_DETAILS, VALID_USER, INVALID_USER, GET_ERRORS, ENDPOINT, LOGOUT, MESSAGE } from './types'

import axios from "axios";

export const validateUser = (username, password) => async dispatch => {
    try {
        const res=await axios.get(ENDPOINT +`api/user/username=${username}&&password=${password}`);
        if(typeof(res.data)==="string")
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

    } catch (e) {
        dispatch({
            type:MESSAGE,
            payload:{
                message: "Database is not running. Please contact the admin"}})
    }
}

export const getUserDetails=() => dispatch => {
     dispatch({
        type:GET_USER_DETAILS,
        payload:""})
}

export const registerUser = (user,history) => async dispatch => {
    try {
        await axios.post(ENDPOINT +"api/user/register",user);
        history.push("/");
        dispatch({
            type:MESSAGE,
            payload:{
                message: "Successfully registered"}
        })

    } catch (e) {
        dispatch({
            type:MESSAGE,
            payload:{
                message: "Database is not running. Please contact the admin"}})
    }

}


export const logoutUser=() => dispatch => {
     dispatch({
        type:LOGOUT,
        payload:""})
}
