import {DISPLAY_ERROR} from "./ActionType"

export const errorStatue = (status, formName) => {
    return {type: DISPLAY_ERROR, payload: status, formName: formName}
}
