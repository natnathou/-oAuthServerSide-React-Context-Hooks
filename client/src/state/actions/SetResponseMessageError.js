import {RESPONSE_ERROR_MESSAGE} from "./ActionType"

//to update response message error
export const setResponseMessageError = (message, formName) => {
    return {type: RESPONSE_ERROR_MESSAGE, payload: message, formName: formName}
}