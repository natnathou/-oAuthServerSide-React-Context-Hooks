import {FORM_PROPS_MODIFY} from "./ActionType"

//to update form props reducer
export const formPropsModify = (formProps, formName) => {
    return {type: FORM_PROPS_MODIFY, payload: formProps, formName}
}