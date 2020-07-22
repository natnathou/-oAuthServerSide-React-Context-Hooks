import {FORM_MODIFY} from "./ActionType"


//to update formValue Reducer
export const formModify = (formValue, formName) => {
    return {type: FORM_MODIFY, payload: formValue, formName: formName}
}
