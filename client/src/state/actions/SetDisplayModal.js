import {DISPLAY_MODAL} from "./ActionType"

export const setDisplayModal = (message, display) =>{        
    return {type: DISPLAY_MODAL, payload: {message, display}}
}