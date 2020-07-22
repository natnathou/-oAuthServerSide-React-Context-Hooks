import {useReducer} from "react";
import {Actions} from "../actions/Actions";
import {DISPLAY_MODAL} from "../actions/ActionType"


const setDisplayModal=(message, display)=>Actions.setDisplayModal(message, display)

const initialState = {status:false, message:""}


const todoReducer =(state,action)=>{
    switch (action.type) {
      case DISPLAY_MODAL:
        if(action.payload.display===undefined)
            {
                return {...state, status:!state.status, message: action.payload.message}

            } else {

                return {...state, status:action.payload.display, message: action.payload.message}

            }
    default:
        return state;
    }
}

export const DisplayModalReducer =()=>{

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const setDisplayModalAction=(message, display)=>{
    dispatch({type: setDisplayModal(message, display).type, payload: setDisplayModal(message, display).payload})
  }

  return {...state,setDisplayModalAction}
  
}