import React, {useContext, useEffect, useState} from "react"
import _ from "lodash"
import Context from "../../state/StateContext"
import {FormReset as formReset} from "../../state/actions/FormReset"
import Button from "./Button/Button"
import InputTextField from "./input/InputTextField"
import InputFileField from "./input/InputFileField"
import TextAreaField from "./input/TextAreaField"
import SelectField from './input/SelectField'
import RadioCheckboxField from "./input/RadioCheckboxField"
import PasswordField from "./input/PasswordField"
import "./style/Form.css"




const Form =(props)=> {

    const context = useContext(Context)
    const [state, setstate] = useState(false)

    useEffect(() => {

        if(!state){
            const initializePropsValue = json => {
                return json.map( data => {
        
                    switch (data.type) {
                        case "file":
                            return context.formPropsReducer.formPropsInitializeAction({
                                [data.name]: {
                                    touch            : false,
                                    required         : data.required,
                                    display          : data.display,
                                    extensionAccepted: data.extensionAccepted,
                                    filesContent     : [],
                                    error            : false
                                }
                            }
                            , props.nameForm);
                            
                        case "text":
                            return context.formPropsReducer.formPropsInitializeAction({
                                [data.name]: {
                                    touch   : false,
                                    required: data.required,
                                    error   : false
                                }
                            }, props.nameForm);
                        
                        case "email":
                            return context.formPropsReducer.formPropsInitializeAction({
                                [data.name]: {
                                    touch   : false,
                                    required: data.required,
                                    error   : false
                                }
                            }, props.nameForm);

                        case "number":
                            return context.formPropsReducer.formPropsInitializeAction({
                                [data.name]: {
                                    touch   : false,
                                    required: data.required,
                                    error   : false
                                }
                            }, props.nameForm);

                        case "tel":
                            return context.formPropsReducer.formPropsInitializeAction({
                                [data.name]: {
                                    touch   : false,
                                    required: data.required,
                                    error   : false
                                }
                            }, props.nameForm);

                        case "password":
                            return context.formPropsReducer.formPropsInitializeAction({
                                [data.name]: {
                                    touch   : false,
                                    required: data.required,
                                    error   : false
                                }
                            }, props.nameForm);
                        
                        case "radio":
                            return context.formPropsReducer.formPropsRadioInitializeAction({
                                [data.name]: {
                                    [data.value]: {
                                        touch   : false,
                                        required: data.required,
                                        error   : false
                                    }
                                }
                            }, data.name, data.value, props.nameForm);
                        
                        case "checkbox":
                            return context.formPropsReducer.formPropsInitializeAction({
                                [data.name]: {
                                    touch   : false,
                                    required: data.required,
                                    error   : false
                                }
                            }, props.nameForm);
                            
                        case "big_text":
                            return context.formPropsReducer.formPropsInitializeAction({
                                [data.name]: {
                                    touch   : false,
                                    required: data.required,
                                    error   : false
                                }
                            }, props.nameForm);
                        
                        case "list":
                            return context.formPropsReducer.formPropsInitializeAction({
                                [data.name]: {
                                    touch      : false,
                                    required   : data.required,
                                    optionArray: data.optionArray,
                                    error      : false
                                }
                            }, props.nameForm);
                        
                        default:
                            return null
                    }
                })
            }

            



            const initializeValue = json => json.map(async data => {
                switch(data.type){
                    case "file":
                        await context.formValueReducer.formModifyAction({[data.name]: [""]}, props.nameForm)                   
                        break
                    case "text":
                        await context.formValueReducer.formModifyAction({[data.name]: data.initialValue}, props.nameForm)
                        break
                    case "email":
                        await context.formValueReducer.formModifyAction({[data.name]: data.initialValue}, props.nameForm)
                        break
                    case "number":
                        await context.formValueReducer.formModifyAction({[data.name]: data.initialValue}, props.nameForm)
                        break
                    case "tel":
                        await context.formValueReducer.formModifyAction({[data.name]: data.initialValue}, props.nameForm)
                        break
                    case "password":
                        await context.formValueReducer.formModifyAction({[data.name]: data.initialValue}, props.nameForm)
                        break
                    case "radio":
                        await context.formValueReducer.radioModifyAction({[data.name]: {[data.value]: data.initialChecked}}, data.name, data.value, props.nameForm)
                        break
        
                    case "checkbox":
                        await context.formValueReducer.formModifyAction({[data.name]: data.initialChecked}, props.nameForm)
                        break
                    case "big_text":
                        await context.formValueReducer.formModifyAction({[data.name]: data.initialValue}, props.nameForm)
                        break
                    case "list":
                        await context.formValueReducer.formModifyAction({[data.name]: data.initialValue}, props.nameForm)
                        break
                    default:
                        break
                }
            })
            

                //value form initialization
                initializeValue(props.formField)
                //value props initilization
                initializePropsValue(props.formField)
                //value props initilization

                setstate(1)    
                            
    
            }
            
    
    },[state,props.formField,props.nameForm, context.formValueReducer, context.formPropsReducer])
    
  
     useEffect(() => {
        if(state===1){
            const initializeErrorProp = json => json.map(async data => {
            switch (data.type) {
                case "file":
                    if(state && context.formValueReducer[props.nameForm][data.name][0] === "" && context.formPropsReducer[props.nameForm][data.name]["required"]){        
                        await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: true}}, props.nameForm)                    
                    }                    
                    break
                case "text":

                    if(state && context.formValueReducer[props.nameForm][data.name] === "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                        await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: true}}, props.nameForm)        
                    }                    
                    break
                case "email":
                    if(state && context.formValueReducer[props.nameForm][data.name] === "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                        await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: true}}, props.nameForm)        
                    }                    
                    break
                case "number":
                    if(state && context.formValueReducer[props.nameForm][data.name] === "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                        await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: true}}, props.nameForm)        
                    }
                    break
                case "tel":
                    if(state && context.formValueReducer[props.nameForm][data.name] === "" && context.formPropsReducer[props.nameForm][data.name]["required"]){        
                        await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: true}}, props.nameForm)        
                    }
                    break
                case "password":
                    if(state && context.formValueReducer[props.nameForm][data.name] === "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                        await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: true}}, props.nameForm)        
                    }
                    break
                case "radio":
                    if(state){
                        let err        = true;
                        let checkError = () => _.toArray(context.formValueReducer[props.nameForm][data.name]).forEach((data) => {
                            if (data) {        
                                err = false
                            }
                        })
        
                        checkError()
                        if(err && context.formPropsReducer[props.nameForm][data.name][data.value]["required"]){        
                            await context.formPropsReducer.formPropsRadioModifyPropertyAction({[data.name]: {error: true}}, props.nameForm)        
                        }        
                    }
                    break
        
                case "checkbox":
                    if(state && !context.formValueReducer[props.nameForm][data.name] && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                        await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: true}}, props.nameForm)        
                    }
                    break
                case "big_text":
                    if(state && context.formValueReducer[props.nameForm][data.name] === "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                        await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: true}}, props.nameForm)        
                    }
                    break
                case "list":
                    if(state && context.formValueReducer[props.nameForm][data.name] === context.formPropsReducer[props.nameForm][data.name]["optionArray"][0]){                        
                        await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: true}}, props.nameForm)        
                    }
                    break
                default:
                    break
            }
        })
    
        initializeErrorProp(props.formField)
        setstate(2)    
    }
    }, [state, props.formField,props.nameForm, context.formValueReducer, context.formPropsReducer])
    

    // we initialize one more time error props, to set error false if the form is autocomplete
    useEffect(() => {
       if(state>=2){
           const initializeErrorProp = json => json.map(async data => {
           switch (data.type) {
               case "file":
                   if(context.formPropsReducer[props.nameForm][data.name][`error`] && context.formValueReducer[props.nameForm][data.name][0] !== "" && context.formPropsReducer[props.nameForm][data.name]["required"]){        
                       await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: false}}, props.nameForm)
                    }                
                   break
               case "text":

                   if(context.formPropsReducer[props.nameForm][data.name][`error`] && context.formValueReducer[props.nameForm][data.name] !== "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                       await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: false}}, props.nameForm)
                   }                    
                   break
               case "email":

                   if(context.formPropsReducer[props.nameForm][data.name][`error`] && context.formValueReducer[props.nameForm][data.name] !== "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                       await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: false}}, props.nameForm)
                   }                    
                   break
               case "number":
                   if(context.formPropsReducer[props.nameForm][data.name][`error`] && context.formValueReducer[props.nameForm][data.name] !== "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                       await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: false}}, props.nameForm)
                   }
                   break
               case "tel":
                   if(context.formPropsReducer[props.nameForm][data.name][`error`] && context.formValueReducer[props.nameForm][data.name] !== "" && context.formPropsReducer[props.nameForm][data.name]["required"]){        
                       await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: false}}, props.nameForm)
                   }
                   break
               case "password":
                   if(context.formPropsReducer[props.nameForm][data.name][`error`] && context.formValueReducer[props.nameForm][data.name] !== "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                       await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: false}}, props.nameForm)
                   }
                   break
               case "radio":
                   if(context.formPropsReducer[props.nameForm][data.name][`error`]){
                       let err        = true;
                       let checkError = () => _.toArray(context.formValueReducer[props.nameForm][data.name]).forEach((data) => {
                           if (data) {        
                               err = false
                           }
                       })
       
                       checkError()
                       if(!err && context.formPropsReducer[props.nameForm][data.name][data.value]["required"]){        
                           await context.formPropsReducer.formPropsRadioModifyPropertyAction({[data.name]: {error: false}}, props.nameForm)
                       }        
                   }
                   break
       
               case "checkbox":
                   if(context.formPropsReducer[props.nameForm][data.name][`error`] && !context.formValueReducer[props.nameForm][data.name] && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                       await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: false}}, props.nameForm)
                   }
                   break
               case "big_text":
                   if(context.formPropsReducer[props.nameForm][data.name][`error`] && context.formValueReducer[props.nameForm][data.name] !== "" && context.formPropsReducer[props.nameForm][data.name]["required"]){                        
                       await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: false}}, props.nameForm)
                   }
                   break
               case "list":
                   if(context.formPropsReducer[props.nameForm][data.name][`error`] && context.formValueReducer[props.nameForm][data.name] !== context.formPropsReducer[props.nameForm][data.name]["optionArray"][0]){                        
                       await context.formPropsReducer.formPropsModifyAction({[data.name]: {error: false}}, props.nameForm)
                   }
                   break
               default:
                   break
           }
       })
   
       initializeErrorProp(props.formField)
          
   }
   }, [state, props.formField,props.nameForm, context.formValueReducer, context.formPropsReducer])
    

    // method to display error message when the input is empty if the input is required
    const renderError = (data) => {
        if (context.formPropsReducer[props.nameForm][data.name]) {
            switch (data.type) {
                case "file":

                    //check if error after that the input is touched
                    if (context.formPropsReducer[props.nameForm][data.name]["touch"] && context.formValueReducer[props.nameForm][data.name][0] === "" && data.required) {
                        return <div className="Error">{data.error}</div>
                    }
                    //check if error when we wil send our form
                    if (context.formValueReducer[props.nameForm][data.name][0] === "" && data.required && context.formErrorReducer[props.nameForm]) {
                        return <div className="Error">{data.error}</div>
                    } else {
                        return null
                    }

                case   "checkbox":
                    //check if error after that the input is touched
                    if (context.formPropsReducer[props.nameForm][data.name]["touch"] && !context.formValueReducer[props.nameForm][data.name] && data.required) {
                        return <div className="Error">{data.error}</div>
                    }
                    //check if error when we wil send our form
                    if (!context.formValueReducer[props.nameForm][data.name] && data.required && context.formErrorReducer[props.nameForm]) {
                        return <div className="Error">{data.error}</div>
                    } else {
                        return null
                    }

                case   "radio":
                    //check if error when we wil send our form (ww dont check touched because if the input is a radio we cannot touch if without to select it so it cannot be empty)
                    if (context.formPropsReducer[props.nameForm][data.name]["error"] && context.formErrorReducer[props.nameForm]) {
                        return <div className="Error">{data.error}</div>
                    } else {
                        return null
                    }


                case   "list":
                    //check if error after that the input is touched
                    if (context.formPropsReducer[props.nameForm][data.name]["touch"] && context.formValueReducer[props.nameForm][data.name] === data.optionArray[0] && data.required) {
                        return <div className="Error">{data.error}</div>
                    }
                    //check if error when we wil send our form
                    if (context.formValueReducer[props.nameForm][data.name] === data.optionArray[0] && data.required && context.formErrorReducer[props.nameForm]) {
                        return <div className="Error">{data.error}</div>
                    } else {
                        return null
                    }

                default:
                    //check if error after that the input is touched
                    if (context.formPropsReducer[props.nameForm][data.name]["touch"] && context.formValueReducer[props.nameForm][data.name] === "" && data.required) {
                        return (<div className="Error">{data.error}</div>)
                    }
                    //check if error when we wil send our form

                    if (context.formValueReducer[props.nameForm][data.name] === "" && data.required && context.formErrorReducer[props.nameForm]) {
                        return (<div className="Error">{data.error}</div>)
                    } else {
                        return null
                    }
            }
        }

    }

    //method to render an image if the file selected is an image (render with file reader)
    const imageRender = (data) => {
        if (context.formValueReducer[props.nameForm][data.name][0] !== "" && context.formPropsReducer[props.nameForm][data.name]["display"]) {
            return context.formPropsReducer[props.nameForm][data.name]["filesContent"].map((datas, index) => {
                if (datas.type === "image/jpeg" || datas.type === "image/png") {
                    return <img src={datas.content} alt={`${context.formValueReducer[props.nameForm][data.name][index]["name"]}`}
                                key={index}/>
                } else {
                    return null
                }
            })
        }
    }



//methode to map our json and check which input we will render
    const renderInput = json => json.map((data, index) => {
        let error = false;
        //error variable value assignation to check when we will pass the class ErrorColor to our input
        if (context.formPropsReducer[props.nameForm] && context.formValueReducer[props.nameForm]) {
            if (context.formPropsReducer[props.nameForm][data.name]) {
                switch (data.type) {
                    case "checkbox":
                        if (context.formPropsReducer[props.nameForm][data.name]["touch"] && !context.formValueReducer[props.nameForm][data.name] && data.required) {
                            error = true;
                        }
                        if (context.formErrorReducer[props.nameForm] && !context.formValueReducer[props.nameForm][data.name] && data.required) {
                            error = true;
                        }
                        break
                    case "list":
                        if (context.formPropsReducer[props.nameForm][data.name]["touch"] && context.formValueReducer[props.nameForm][data.name] === data.optionArray[0]  && data.required) {
                            error = true;
                        }
                        if (context.formErrorReducer[props.nameForm] && context.formValueReducer[props.nameForm][data.name] === data.optionArray[0]  && data.required) {
                            error = true;
                        }
                        break
                    case "file":
                        if (context.formErrorReducer[props.nameForm] && context.formValueReducer[props.nameForm][data.name][0] === "" && data.required) {
                            error = true;
                        }
                        break
                    default:
                        if (context.formPropsReducer[props.nameForm][data.name]["touch"] && context.formValueReducer[props.nameForm][data.name] === "" && data.required) {
                            error = true;
                        }
                        if (context.formErrorReducer[props.nameForm] && context.formValueReducer[props.nameForm][data.name] === "" && data.required) {
                            error = true;
                        }
                        break
                }
            }

            // map our json to check which type of input we will render
            switch (data.type) {
                case "file":
                    //text label vale assignation ("select your file or number of file uploaded")
                    if (context.formValueReducer[props.nameForm][data.name]) {
                        let textLabel = data.textLabel

                        if (context.formPropsReducer[props.nameForm][data.name]["filesContent"][0] !== "" && context.formPropsReducer[props.nameForm][data.name]["filesContent"].length === 1) {
                            textLabel = "1 File Uploaded"
                        }
                        if (context.formPropsReducer[props.nameForm][data.name]["filesContent"][0] !== "" && context.formPropsReducer[props.nameForm][data.name]["filesContent"].length > 1) {
                            textLabel = `${context.formPropsReducer[props.nameForm][data.name]["filesContent"].length} Files Uploaded`
                        }
                        
                        return (
                            <div key={index}>
                                <InputFileField
                                    label={data.label}
                                    textLabel={textLabel}
                                    type={data.type}
                                    id={data.id}
                                    required={data.required}
                                    name={data.name}
                                    placeholder={data.placeholder}
                                    value={context.formValueReducer[props.nameForm][data.name][0].name ? `C:\\fakepath\\${context.formValueReducer[props.nameForm][data.name][0].name}` : undefined}
                                    accept={data.extensionAccepted}
                                    handClick={handClick}
                                    handleChange={handleChange}
                                    handBlur={handBlur}
                                    autocomplete={data.autocomplete}
                                    className={error ? "ErrorColor" : ""}
                                />
                                {renderError(data)}
                                <div className="Image">{imageRender(data)}</div>
                            </div>
                        )

                    } else {
                        return null
                    }

                case "text":
                    return (
                        <div key={index}>
                            <InputTextField
                                label={data.label}
                                textLabel={data.textLabel}
                                type={data.type}
                                id={data.id}
                                required={data.required}
                                name={data.name}
                                placeholder={data.placeholder}
                                value={context.formValueReducer[props.nameForm][data.name]}
                                handClick={handClick}
                                handleChange={handleChange}
                                handBlur={handBlur}
                                autocomplete={data.autocomplete}
                                className={error ? "ErrorColor" : ""}
                            />
                            {renderError(data)}
                        </div>

                    )
                case "email":
                    return (
                        <div key={index}>
                            <InputTextField
                                label={data.label}
                                textLabel={data.textLabel}
                                type={data.type}
                                id={data.id}
                                required={data.required}
                                name={data.name}
                                placeholder={data.placeholder}
                                value={context.formValueReducer[props.nameForm][data.name]}
                                handClick={handClick}
                                handleChange={handleChange}
                                handBlur={handBlur}
                                autocomplete={data.autocomplete}
                                className={error ? "ErrorColor" : ""}
                            />
                            {renderError(data)}
                        </div>

                    )
                case "number":
                    return (
                        <div key={index}>
                            <InputTextField
                                label={data.label}
                                textLabel={data.textLabel}
                                type={data.type}
                                id={data.id}
                                required={data.required}
                                name={data.name}
                                placeholder={data.placeholder}
                                value={context.formValueReducer[props.nameForm][data.name]}
                                handClick={handClick}
                                handleChange={handleChange}
                                handBlur={handBlur}
                                autocomplete={data.autocomplete}
                                className={error ? "ErrorColor" : ""}
                            />
                            {renderError(data)}
                        </div>

                    )
                case "tel":
                    return (
                        <div key={index}>
                            <InputTextField
                                label={data.label}
                                textLabel={data.textLabel}
                                type={data.type}
                                id={data.id}
                                required={data.required}
                                name={data.name}
                                placeholder={data.placeholder}
                                value={context.formValueReducer[props.nameForm][data.name]}
                                handClick={handClick}
                                handleChange={handleChange}
                                handBlur={handBlur}
                                autocomplete={data.autocomplete}
                                className={error ? "ErrorColor" : ""}
                            />
                            {renderError(data)}
                        </div>

                    )
                case "password":
                    return (
                        <div key={index}>
                            <PasswordField
                                label={data.label}
                                textLabel={data.textLabel}
                                type={data.type}
                                id={data.id}
                                required={data.required}
                                name={data.name}
                                placeholder={data.placeholder}
                                value={context.formValueReducer[props.nameForm][data.name]}
                                handClick={handClick}
                                handleChange={handleChange}
                                handBlur={handBlur}
                                autocomplete={data.autocomplete}
                                className={error ? "ErrorColor" : ""}
                            />
                            {renderError(data)}
                        </div>
                    )
                case "radio":
                    if (context.formValueReducer[props.nameForm][data.name]) {
                        return (
                            <div key={index}>
                                <RadioCheckboxField
                                    label={data.label}
                                    textLabel={data.textLabel}
                                    type={data.type}
                                    id={data.id}
                                    required={data.required}
                                    name={data.name}
                                    placeholder={data.placeholder}
                                    value={data.value}
                                    check={context.formValueReducer[props.nameForm][data.name][data.value]}
                                    handClick={handClick}
                                    handleChange={handleChange}
                                    handBlur={handBlur}
                                    autocomplete={data.autocomplete}
                                    className={error ? "ErrorColorRadioCheckbox" : ""}
                                />
                                {renderError(data)}
                            </div>
                        )
                    } else {
                        return null
                    }


                case "checkbox":
                    return (
                        <div key={index}>
                            <RadioCheckboxField
                                label={data.label}
                                textLabel={data.textLabel}
                                type={data.type}
                                id={data.id}
                                required={data.required}
                                name={data.name}
                                placeholder={data.placeholder}
                                value={data.value}
                                check={context.formValueReducer[props.nameForm][data.name]}
                                handClick={handClick}
                                handleChange={handleChange}
                                handBlur={handBlur}
                                autocomplete={data.autocomplete}
                                className={error ? "ErrorColorRadioCheckbox" : ""}
                            />
                            {renderError(data)}
                        </div>

                    )
                case "big_text":
                    return (
                        <div key={index}>
                            <TextAreaField
                                type={data.type}
                                id={data.id}
                                required={data.required}
                                name={data.name}
                                value={context.formValueReducer[props.nameForm][data.name]}
                                handClick={handClick}
                                handleChange={handleChange}
                                handBlur={handBlur}
                                autocomplete={data.autocomplete}
                                className={error ? "ErrorColor" : ""}
                            />
                            {renderError(data)}
                        </div>

                    )
                case "list":
                    return (
                        <div key={index}>
                            <SelectField
                                type={data.type}
                                label={data.label}
                                textLabel={data.textLabel}
                                id={data.id}
                                name={data.name}
                                optionArray={data.optionArray}
                                value={context.formValueReducer[props.nameForm][data.name]}
                                handClick={handClick}
                                handleChange={handleChange}
                                handBlur={handBlur}
                                autocomplete={data.autocomplete}
                                className={error ? "ErrorColor" : ""}
                            />
                            {renderError(data)}
                        </div>

                    )
                default:
                    return null
            }

        }
        return null


    });

//change event
    const handleChange = async (event) => {
        event.persist()
        switch (event.target.type) {
            case "checkbox":
                await context.formValueReducer.formModifyAction({[event.target.name]: event.target.checked}, props.nameForm)
                await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {touch: true}}, props.nameForm);
                !context.formValueReducer[props.nameForm][event.target.name] && context.formPropsReducer[props.nameForm][event.target.name]["required"]
                    ?
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {error: true}}, props.nameForm)
                    :
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {error: false}}, props.nameForm)
                break

            case "radio":
                await context.formValueReducer.radioModifyAction({[event.target.name]: {[event.target.value]: event.target.checked}}, event.target.name, event.target.value, props.nameForm)
                await context.formPropsReducer.formPropsRadioModifyAction({[event.target.name]: {[event.target.value]: {touch: true}}}, props.nameForm)
                if (context.formPropsReducer[props.nameForm][event.target.name][event.target.value]["required"]) {
                    context.formPropsReducer.formPropsRadioModifyPropertyAction({[event.target.name]: {error: false}}, props.nameForm)
                }

                break

            case "select-one":
                await context.formValueReducer.formModifyAction({[event.target.name]: event.target.value}, props.nameForm)
                await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {touch: true}}, props.nameForm);
                context.formValueReducer[props.nameForm][event.target.name] === context.formPropsReducer[props.nameForm][event.target.name]["optionArray"][0]
                    ?
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {error: true}}, props.nameForm)
                    :
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {error: false}}, props.nameForm)
                break

            case "file":
                if (event.target.files[0]) {
                    await context.formValueReducer.formModifyAction({[event.target.name]: event.target.files}, props.nameForm)
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {filesContent: []}}, props.nameForm)
                    const handleFile = async (e) => {
                        const content = e.target.result;
                        let obj       = {};
                        obj.data      = content.split(";")[0].split(":")[1]
                        obj.base64    = content.split(";")[1].split(",")[1]
                        await context.formPropsReducer.formPropsModifyAction({
                            [event.target.name]: {
                                filesContent: [...context.formPropsReducer[props.nameForm][event.target.name]["filesContent"], {
                                    type   : obj.data,
                                    content: content
                                }]
                            }
                        }, props.nameForm)
                    }

                    _.toArray(event.target.files).forEach(data => {
                        let fileData       = new FileReader();
                        fileData.onloadend = handleFile;
                        fileData.readAsDataURL(data)
                    })

                } else {
                    await context.formValueReducer.formModifyAction({[event.target.name]: [""]}, props.nameForm)
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {filesContent: []}}, props.nameForm)

                }
                context.formValueReducer[props.nameForm][event.target.name][0] === "" && context.formPropsReducer[props.nameForm][event.target.name]["required"]
                    ?
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {error: true}}, props.nameForm)
                    :
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {error: false}}, props.nameForm)

                break

            default:
                await context.formValueReducer.formModifyAction({[event.target.name]: event.target.value}, props.nameForm)
                context.formValueReducer[props.nameForm][event.target.name] === "" && context.formPropsReducer[props.nameForm][event.target.name]["required"]
                    ?
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {error: true}}, props.nameForm)
                    :
                    await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {error: false}}, props.nameForm)
                break
        }
    }

    // click event
    const handClick = async (event) => {
        event.persist()
        switch (event.target.type) {
            case "file":
                let name = event.target.name
                window.addEventListener("focus", async () => {
                    setTimeout(async () => {
                        // we wait that the window will be focus to update the touch props
                        await context.formPropsReducer.formPropsModifyAction({[name]: {touch: true}}, props.nameForm);
                    }, 500)

                })
                break
            default:
                break

        }
    }

    // blur event
    const handBlur = async (event) => {
        event.persist()
        switch (event.target.type) {

            case "text":
                await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {touch: true}}, props.nameForm);
                break
            case "email":
                await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {touch: true}}, props.nameForm);
                break
            case "number":
                await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {touch: true}}, props.nameForm);
                break
            case "tel":
                await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {touch: true}}, props.nameForm);
                break
            case "password":
                await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {touch: true}}, props.nameForm);
                break
            case "radio":
                break
            case "big_text":
                await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {touch: true}}, props.nameForm);
                break
            case "select-one":
                await context.formPropsReducer.formPropsModifyAction({[event.target.name]: {touch: true}}, props.nameForm);
                break
            default:
                break

        }
    }

    const handSubmit=(event)=>{
    }

    const handKeyPress=(event)=>{
        if(event.key==="Enter" && event.target.tagName !== "TEXTAREA"){
            handSubmit(event)            
        }
        else{
            event.stopPropagation()
        }
    }


    return (
        <form 
            className="Form" 
            onSubmit={handSubmit} 
            onKeyPress={handKeyPress}
        >
        
            {renderInput(props.formField)}
           
            <Button 
                formField={props.formField} 
                buttonField={props.buttonField}
                nameForm={props.nameForm}
                formReset={formReset}
            />
        </form>
    )

}


export default Form
