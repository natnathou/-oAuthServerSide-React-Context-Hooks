import {useReducer} from "react";
import {Actions} from "../actions/Actions";
import {RESPONSE_ERROR_MESSAGE} from "../actions/ActionType"
import nameForm from "../../components/Form/json/nameForm"


const setResponseMessageError=(message, formName)=>Actions.setResponseMessageError(message, formName)

const initialState = {}

nameForm.forEach(data=>{
    initialState[data]=""
})


const todoReducer =(state,action)=>{
  switch (action.type) {        
    case RESPONSE_ERROR_MESSAGE:
        return {...state, [action.formName]:action.payload}
    default:
        return state;
}
}

export const ResponseErrorMessageReducer =()=>{

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const setResponseMessageErrorAction=(message, formName)=>{
    dispatch({type: setResponseMessageError(message, formName).type, payload: setResponseMessageError(message, formName).payload, formName: setResponseMessageError(message, formName).formName})
  }

  return {...state,setResponseMessageErrorAction}
  
}