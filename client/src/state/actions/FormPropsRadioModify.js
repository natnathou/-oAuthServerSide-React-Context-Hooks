import {FORM_PROPS_RADIO_MODIFY} from "./ActionType"

//to update sub property in form props reducer (if it's a radio input) (two sub level)
export const formPropsRadioModify = (formValue, formName) => {
    return {type: FORM_PROPS_RADIO_MODIFY, payload: formValue, formName: formName}
}