import {FORM_PROPS_RADIO_INITIALIZE} from "./ActionType"

//to initialize form props reducer (if it's a radio input)
export const formPropsRadioInitialize = (formValue, propriety, subPropriety, formName) => {
    return {type: FORM_PROPS_RADIO_INITIALIZE, payload: {formValue, propriety, subPropriety}, formName: formName}
}