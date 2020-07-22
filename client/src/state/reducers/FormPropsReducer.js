import {useReducer} from "react";
import _ from "lodash"
import {Actions} from "../actions/Actions";
import {
  FORM_PROPS_INITIALIZE,
  FORM_PROPS_RADIO_INITIALIZE,
  FORM_PROPS_MODIFY,
  FORM_PROPS_RADIO_MODIFY,
  FORM_PROPS_RADIO_MODIFY_PROPERTY
} from "../actions/ActionType"
import nameForm from "../../components/Form/json/nameForm"


const formPropsInitialize=(formProps, formName)=>Actions.formPropsInitialize(formProps, formName)
const formPropsRadioInitialize=(formValue, propriety, subPropriety, formName)=>Actions.formPropsRadioInitialize(formValue, propriety, subPropriety, formName)
const formPropsModify=(formProps, formName)=>Actions.formPropsModify(formProps, formName)
const formPropsRadioModify=(formValue, formName)=>Actions.formPropsRadioModify(formValue, formName)
const formPropsRadioModifyProperty=(formValue, formName)=>Actions.formPropsRadioModifyProperty(formValue, formName)

const initialState = {}

nameForm.forEach(data=>{
    initialState[data]=null
})

const todoReducer =(state,action)=>{
  switch (action.type) {
    case FORM_PROPS_INITIALIZE:
        return {...state, [action.formName]:{...state[action.formName], ...action.payload}}
    
    case FORM_PROPS_RADIO_INITIALIZE:
        let property = {...state[action.formName][action.payload.propriety], ...action.payload.formValue[action.payload.propriety]}
        let objectProperty = {...state[action.formName],[action.payload.propriety]:property}
        return {...state, [action.formName]: objectProperty}
        
    case FORM_PROPS_MODIFY:
        let update = {...state[action.formName],[_.keys(action.payload)]: {...state[action.formName][_.keys(action.payload)], ...action.payload[_.keys(action.payload)]}}
        return {...state, [action.formName]:update}
    case FORM_PROPS_RADIO_MODIFY:
        let property2    = _.keys(action.payload)
        let subProperty = _.keys(action.payload[property2])
        let obj          = {...state[action.formName][property2][subProperty], ...action.payload[property2][subProperty]}
        let newObj       = {[subProperty]: obj}
        let update2 = {...state[action.formName],[property2]:{...state[action.formName][property2], ...newObj}}
        return {...state, [action.formName]:update2 }
    case FORM_PROPS_RADIO_MODIFY_PROPERTY:
        let key      = _.keys(action.payload)
        let objError = action.payload[_.keys(action.payload)]
        let update3  = {...state[action.formName],[key]: {...state[action.formName][key], ...objError}}
        return {...state, [action.formName]:update3}
    default:
        return state;
  }
}

export const FormPropsReducer =()=>{

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const formPropsInitializeAction=(formProps, formName)=>{
    dispatch({type: formPropsInitialize(formProps, formName).type, payload: formPropsInitialize(formProps, formName).payload, formName: formPropsInitialize(formProps, formName).formName})
  }

  const formPropsRadioInitializeAction=(formValue, propriety, subPropriety, formName)=>{
    dispatch({type: formPropsRadioInitialize(formValue, propriety, subPropriety, formName).type, payload: formPropsRadioInitialize(formValue, propriety, subPropriety, formName).payload, formName: formPropsRadioInitialize(formValue, propriety, subPropriety, formName).formName})
  }

  const formPropsModifyAction=(formProps, formName)=>{
    dispatch({type: formPropsModify(formProps, formName).type, payload: formPropsModify(formProps, formName).payload, formName: formPropsModify(formProps, formName).formName})
  }

  const formPropsRadioModifyAction=(formValue, formName)=>{
    dispatch({type: formPropsRadioModify(formValue, formName).type, payload: formPropsRadioModify(formValue, formName).payload, formName: formPropsRadioModify(formValue, formName).formName})
  }

  const formPropsRadioModifyPropertyAction=(formValue, formName)=>{
    dispatch({type: formPropsRadioModifyProperty(formValue, formName).type, payload: formPropsRadioModifyProperty(formValue, formName).payload, formName: formPropsRadioModifyProperty(formValue, formName).formName})
  }


  return {...state,formPropsInitializeAction,formPropsRadioInitializeAction,formPropsModifyAction,formPropsRadioModifyAction,formPropsRadioModifyPropertyAction}
  
}