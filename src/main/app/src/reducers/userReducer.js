import { GET_USER_DETAILS, VALID_USER, INVALID_USER, LOGOUT,MESSAGE } from './../actions/types'

const initialState={
  message:"",
  loggedIn:false,
  user:{}
}

export default function(state=initialState,action){
  const oldState={...state};
  switch(action.type)
  {
    case INVALID_USER:
      return { ...state,  message: action.payload.message,loggedIn:false,user:{}}
      break;

    case VALID_USER:
      return{...state,user:action.payload.user,loggedIn:true,message:""}
      break;

    case GET_USER_DETAILS:
      return state;
      break;

    case LOGOUT:
      return {...state,user:{},loggedIn:false,message:"You have successfully logged out"}
      break;

    case MESSAGE:
      return {...state,user:{},loggedIn:false,message:action.payload.message}
      break;

    default:
      return state;
  }

}
