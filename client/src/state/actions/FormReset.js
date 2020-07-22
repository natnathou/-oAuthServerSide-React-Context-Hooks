import _ from "lodash"
import {FORM_RESET} from "./ActionType"


export const FormReset = (json, nameForm, context) => {

    context[`formErrorReducer`].errorStatueAction(false, nameForm)
    json.map(data => {
        switch (data.type) {
            case "file":
                context[`formValueReducer`].formModifyAction({[data.name]: [""]}, nameForm)
                context[`formPropsReducer`].formPropsInitializeAction({
                    [data.name]: {
                        touch            : false,
                        required         : data.required,
                        display          : data.display,
                        extensionAccepted: data.extensionAccepted,
                        filesContent     : []
                    }
                }, nameForm)
                context["formValueReducer"][nameForm][data.name][0] === "" && context["formPropsReducer"][nameForm][data.name]["required"]
                    ?
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: false}}, nameForm)
                return null
            case "text":
                context[`formValueReducer`].formModifyAction({[data.name]: data.initialValue}, nameForm)
                context[`formPropsReducer`].formPropsModifyAction({[data.name]: {touch: false, required: data.required}}, nameForm)
                context["formValueReducer"][nameForm][data.name] === "" && context["formPropsReducer"][nameForm][data.name]["required"]
                    ?
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: false}}, nameForm)
                return null
            case "email":
                context[`formValueReducer`].formModifyAction({[data.name]: data.initialValue}, nameForm)
                context[`formPropsReducer`].formPropsModifyAction({[data.name]: {touch: false, required: data.required}}, nameForm)
                context["formValueReducer"][nameForm][data.name] === "" && context["formPropsReducer"][nameForm][data.name]["required"]
                    ?
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: false}}, nameForm)
                return null
            case "number":
                context[`formValueReducer`].formModifyAction({[data.name]: data.initialValue}, nameForm)
                context[`formPropsReducer`].formPropsModifyAction({[data.name]: {touch: false, required: data.required}}, nameForm)
                context["formValueReducer"][nameForm][data.name] === "" && context["formPropsReducer"][nameForm][data.name]["required"]
                    ?
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: false}}, nameForm)
                return null
            case "tel":
                context[`formValueReducer`].formModifyAction({[data.name]: data.initialValue}, nameForm)
                context[`formPropsReducer`].formPropsModifyAction({[data.name]: {touch: false, required: data.required}}, nameForm)
                context[`formValueReducer`][nameForm][data.name] === "" && context[`formValueReducer`][nameForm][data.name]["required"]
                    ?
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: false}}, nameForm)
                return null
            case "password":
                context[`formValueReducer`].formModifyAction({[data.name]: data.initialValue}, nameForm)
                context[`formPropsReducer`].formPropsModifyAction({[data.name]: {touch: false, required: data.required}}, nameForm)
                context["formValueReducer"][nameForm][data.name] === "" && context["formPropsReducer"][nameForm][data.name]["required"]
                    ?
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: false}}, nameForm)
                return null
            case "radio":
                context[`formValueReducer`].radioModifyAction({[data.name]: {[data.value]: data.initialChecked}}, data.name, data.value, nameForm)
                context[`formPropsReducer`].formPropsModifyAction({
                    [data.name]: {
                        [data.value]: {
                            touch   : false,
                            required: data.required
                        }
                    }
                }, nameForm)
                let err        = true;
                let checkError = () => _.toArray(context["formValueReducer"][nameForm][data.name]).forEach((data) => {
                    if (data) {

                        err = false
                    }
                })

                checkError()
                err && context["formPropsReducer"][nameForm][data.name][data.value]["required"]
                    ?
                    context[`formPropsReducer`].formPropsRadioModifyPropertyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsRadioModifyPropertyAction({[data.name]: {error: false}}, nameForm)
                return null
            case "checkbox":
                context[`formValueReducer`].formModifyAction({[data.name]: data.initialChecked}, nameForm)
                context[`formPropsReducer`].formPropsModifyAction({[data.name]: {touch: false, required: data.required}}, nameForm)
                context["formValueReducer"][nameForm][data.name] && context["formPropsReducer"][nameForm][data.name]["required"]
                    ?
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: false}}, nameForm)
                return null
            case "big_text":
                context[`formValueReducer`].formModifyAction({[data.name]: data.initialValue}, nameForm)
                context[`formPropsReducer`].formPropsModifyAction({[data.name]: {touch: false, required: data.required}}, nameForm)
                context["formValueReducer"][nameForm][data.name] === "" && context["formPropsReducer"][nameForm][data.name]["required"]
                    ?
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: false}}, nameForm)
                return null
            case "list":
                context[`formValueReducer`].formModifyAction({[data.name]: data.initialValue}, nameForm)
                context[`formPropsReducer`].formPropsModifyAction({

                    [data.name]: {
                        touch      : false,
                        required   : data.required,
                        optionArray: data.optionArray
                    }

                }, nameForm)
                context["formValueReducer"][nameForm][data.name] === context["formPropsReducer"][nameForm][data.name]["optionArray"][0]
                    ?
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: true}}, nameForm)
                    :
                    context[`formPropsReducer`].formPropsModifyAction({[data.name]: {error: false}}, nameForm)
                return null
            default:
                return null
        }
    })
    
        return {type: FORM_RESET}
    
}

