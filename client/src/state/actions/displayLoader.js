import {ATTEMPTING_RESPONSE} from "./ActionType"

//to displayLoader
export const displayLoader = (status, formName) => {
    return {type: ATTEMPTING_RESPONSE, payload: status, formName: formName}
}