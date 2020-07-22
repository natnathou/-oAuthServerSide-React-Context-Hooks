import {FORM_PROPS_INITIALIZE} from "./ActionType"

//to initialize form props reducer
export const formPropsInitialize = (formProps, formName) => {
    return {type: FORM_PROPS_INITIALIZE, payload: formProps, formName: formName}
}