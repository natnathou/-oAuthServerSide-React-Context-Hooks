import {useReducer} from "react";
import {Actions} from "../actions/Actions";
import {DISPLAY_ERROR} from "../actions/ActionType"
import nameForm from "../../components/Form/json/nameForm"


const errorStatue=(status, formName)=>Actions.errorStatue(status, formName)

const initialState = {}

nameForm.forEach(data=>{
    initialState[data]=false
})


const todoReducer =(state,action)=>{
    switch (action.type) {
      case DISPLAY_ERROR:
        return {...state, [action.formName]:action.payload}
    default:
        return state;
    }
}

export const FormErrorReducer =()=>{

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const errorStatueAction=(status, formName)=>{
    dispatch({type: errorStatue(status, formName).type, payload: errorStatue(status, formName).payload, formName: errorStatue(status, formName).formName})
  }

  return {...state,errorStatueAction}
  
}