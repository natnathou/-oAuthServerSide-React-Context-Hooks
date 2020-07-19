import {useReducer} from "react";
import {Actions} from "../actions/Actions";
import {ATTEMPTING_RESPONSE} from "../actions/ActionType"
import nameForm from "../../components/Form/json/nameForm"


const displayLoader=(status, formName)=>Actions.displayLoader(status, formName)

const initialState = {}

nameForm.forEach(data => {
    initialState[data] = false
})

const todoReducer =(state,action)=>{
    switch (action.type) {
      case ATTEMPTING_RESPONSE:
        return {...state, [action.formName]:action.payload}
    default:
        return state;
    }
}

export const AttemptingResponseReducer =()=>{

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const displayLoaderAction=(status, formName)=>{
    dispatch({type: displayLoader(status, formName).type, payload: displayLoader(status, formName).payload, formName: displayLoader(status, formName).formName})
  }

  return {...state,displayLoaderAction}
  
}