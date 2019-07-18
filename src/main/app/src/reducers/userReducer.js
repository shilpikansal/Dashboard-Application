  import { GET_USER_DETAILS, VALID_USER, INVALID_USER, LOGOUT } from './../actions/types'

const initialState={
  message:"",
  loggedIn:false,
  user:{}
}

export default function(state=initialState,action){
  switch(action.type)
  {
    case INVALID_USER:
      return { ...state,  message: action.payload.message,loggedIn:action.payload.loggedIn,user:{}};

    case VALID_USER:
      return{...state,user:action.payload.user,loggedIn:true,message:""};

    case GET_USER_DETAILS:
        return state;

    case LOGOUT:
        return {...state,user:{},loggedIn:false,message:"You have successfully logged out"};

    default:
    return state;
  }

}
