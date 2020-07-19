import {RADIO_MODIFY} from "./ActionType"


//to update formValue Reducer if the input is a radio
export const radioModify = (formValue, propriety, subPropriety, formName) => {
    return {type: RADIO_MODIFY, payload: {formValue, propriety, subPropriety}, formName: formName}
}