import _ from "lodash"
import {FORM_SEND} from "./ActionType"


//check if their is an error befor to send our form to the server
export const FormSend = (nameForm, context) => {
    let toArray = _.toArray(context["formPropsReducer"][nameForm])
    let err     = false;
    toArray.map(data => {
        if (data.error) {
            err = true
        }
        return null
    })

    
    context[`formErrorReducer`].errorStatueAction(err, nameForm)
    if (!err) {
        console.log("Form is valide!")
        console.log(context["formValueReducer"][nameForm])

    } else {
        console.log("Form is invalide!")
        // we send our form and if we have an error in the response we dispatch it if 
        // context[`responseErrorMessageReducer`].setResponseMessageErrorAction("message from the response", nameForm)
    }
       return {type: FORM_SEND}
    
}

