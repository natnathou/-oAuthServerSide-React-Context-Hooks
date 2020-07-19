import {useReducer} from "react";
import {Actions} from "../actions/Actions";
import {FORM_MODIFY,RADIO_MODIFY} from "../actions/ActionType"
import nameForm from "../../components/Form/json/nameForm"


const formModify=(formValue, formName)=>Actions.formModify(formValue, formName)
const radioModify=(formValue, propriety, subPropriety, formName)=>Actions.radioModify(formValue, propriety, subPropriety, formName)

const initialState = {}

nameForm.forEach(data=>{
    initialState[data]=null
})


const todoReducer =(state,action)=>{
  switch (action.type) {
    case FORM_MODIFY:
        return {...state, [action.formName]:{...state[action.formName], ...action.payload}}
    case RADIO_MODIFY:
        let property = {...state[action.formName][action.payload.propriety], ...action.payload.formValue[action.payload.propriety]}
        let objectProperty = {...state[action.formName],[action.payload.propriety]:property}
        let statusSubProperty = property[action.payload.subPropriety]
        if (statusSubProperty) {
            Object.getOwnPropertyNames(property).forEach(key => {
                if (key !== action.payload.subPropriety) {
                    property[key] = false
                }
            })
        }
        return {...state, [action.formName]: objectProperty}
    default:
        return state;
}
}

export const FormValueReducer =()=>{

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const formModifyAction=(formValue, formName)=>{
    dispatch({type: formModify(formValue, formName).type, payload: formModify(formValue, formName).payload, formName: formModify(formValue, formName).formName})
  }

  const radioModifyAction=(formValue, propriety, subPropriety, formName)=>{
    dispatch({type: radioModify(formValue, propriety, subPropriety, formName).type, payload: radioModify(formValue, propriety, subPropriety, formName).payload, formName: radioModify(formValue, propriety, subPropriety, formName).formName})
  }

  return {...state,formModifyAction,radioModifyAction}
  
}