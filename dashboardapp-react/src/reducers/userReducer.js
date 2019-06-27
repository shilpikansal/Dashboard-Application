  import { GET_USER_DETAILS, VALID_USER, INVALID_USER } from './../actions/types'

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
      return { ...state,  message: action.payload.message,loggedIn:action.payload.loggedIn,user:{}}
      break;

    case VALID_USER:
      return{...state,user:action.payload.user,loggedIn:true,message:""}
      break;

      case GET_USER_DETAILS:
        return state;
        break;

    default:
    return state;
  }

}
