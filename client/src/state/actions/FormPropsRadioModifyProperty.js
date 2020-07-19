import {FORM_PROPS_RADIO_MODIFY_PROPERTY} from "./ActionType"

//to update property in form props reducer (if it's a radio input) (one sub level)
export const formPropsRadioModifyProperty = (formValue, formName) => {
    return {type: FORM_PROPS_RADIO_MODIFY_PROPERTY, payload: formValue, formName: formName}
}