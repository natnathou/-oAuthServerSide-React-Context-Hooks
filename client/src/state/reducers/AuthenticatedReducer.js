import {useReducer} from "react";
import {Actions} from "../actions/Actions";
import {TEST_AUTHENTICATED} from "../actions/ActionType"


const authenticatedTest=(status, user, error)=>Actions.authenticatedTest(status, user, error)

const initialState = {
  status:false, 
  user:false,
  error:false
}

const todoReducer =(state,action)=>{
    switch (action.type) {
      case TEST_AUTHENTICATED:
        return {...state, status: action.payload.status, user: action.payload.user, error: action.payload.error}
    default:
        return state;
    }
}

export const AuthenticatedReducer =()=>{

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const authenticatedTestAction=(status, user, error)=>{
    dispatch({type: authenticatedTest(status, user, error).type, payload: authenticatedTest(status, user, error).payload})
  }

  return {...state,authenticatedTestAction}
  
}