import React, {useState, useContext, useEffect} from 'react'
import Cookies from "js-cookie"
import history from "../../../history/History"
import _ from "lodash"
import axios from "../../../api/api"
import Context from "../../../state/StateContext";


export const Button =({formField,buttonField,nameForm, formReset})=> {

    const [modal, setModal] = useState(false)

    const context = useContext(Context)


    useEffect(() => {
        if(context["responseErrorMessageReducer"][nameForm] !== "" && !modal){
            context.displayModalReducer.setDisplayModalAction(context["responseErrorMessageReducer"][nameForm])
            setModal(true)
        
        }
    }, [nameForm, context, modal])

   
// check which button we will render after that we map our json
    const renderInput = json => json.map((data, index) => {
        switch (data.function) {
            case "send":
                return <button
                    type="submit"
                    className={data.color}
                    key={index}
                    onClick={handleSendClick}
                    >
                    {data.value}
                </button>
            case "forgot-password":
                return <button
                    className={data.color}
                    key={index}
                    onClick={e=>{
                        e.preventDefault()
                        history.push('/forgot-password')
                    }}
                    >
                    {data.value}
                </button>
            case "reset":
                return <button
                    className={data.color}
                    key={index}
                    onClick={handleResetClick}>
                    {data.value}
                </button>

            default:
                return <button
                    className={data.color}
                    key={index}>
                    {data.value}
                </button>


        }

    })

    // we clcik on send we will send our form
    const handleSendClick = async (event) => {
        event.preventDefault()
        setModal(false)

        let toArray = _.toArray(context["formPropsReducer"][nameForm])
        let err     = false;
        toArray.map(data => {
            if (data.error) {
                err = true
            }
            return null
        })
        await context.formErrorReducer.errorStatueAction(err, nameForm)

        if(!err){
            console.log("Form is valide!")
            await context.attemptingResponseReducer.displayLoaderAction(true, nameForm)
            switch (nameForm) {
                case "signup":
                    if(context["formValueReducer"][nameForm]["password"]!==context["formValueReducer"][nameForm]["passwordConfirmation"]){
                        await context.responseErrorMessageReducer.setResponseMessageErrorAction("Password Confirmation doesn't match", nameForm)
                        await context.attemptingResponseReducer.displayLoaderAction(false, nameForm)
                        return null
                    }
                    try {
                    
                        let param  = {
                            username: context["formValueReducer"][nameForm]["username"],
                            email   : context["formValueReducer"][nameForm]["email"],
                            password: context["formValueReducer"][nameForm]["password"]
                        }
                        let config = {
                            headers    : {
                                Accept                            : "application/json",
                                "Content-Type"                    : "application/json",
                                "access-control-allow-origin"     : "*",
                                "Access-Control-Allow-Credentials": true,
                            },
                            credentials: "include"
                        }
    
                        let response = await axios.post(`/auth/register`, param, config)
                        if (response.status === 200) {
                            if (response.data.message) {
                                await context.attemptingResponseReducer.displayLoaderAction(false, nameForm)
                                await context.responseErrorMessageReducer.setResponseMessageErrorAction(response.data.message, nameForm)
                            }
                            if (response.data.redirect) {
                                window.location = response.data.redirect
                            }
    
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    return null
                case "login":
                    try {
   
                        let param  = {
                            username: context["formValueReducer"][nameForm]["username"],
                            password: context["formValueReducer"][nameForm]["password"]
                        }
                        let config = {
                            headers    : {
                                Accept                            : "application/json",
                                "Content-Type"                    : "application/json",
                                "access-control-allow-origin"     : "*",
                                "Access-Control-Allow-Credentials": true,
                            },
                            credentials: "include"
                        }
    
                        let response = await axios.post(`/auth/login`, param, config)
                        if (response.status === 200) {
                            if (response.data.message) {
                                await context.attemptingResponseReducer.displayLoaderAction(false, nameForm)
                                await context.responseErrorMessageReducer.setResponseMessageErrorAction(response.data.message, nameForm)
                                setTimeout(() => {
                                    console.log(context.responseErrorMessageReducer)
                                }, 5000);
                            }
                            if (response.data.redirect) {
                                window.location = response.data.redirect
                            }
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    return null
                case "forgotPassword":
                    try {
   
                        let param  = {
                            email: context["formValueReducer"][nameForm]["email"],
                        }
                        let config = {
                            headers    : {
                                Accept                            : "application/json",
                                "Content-Type"                    : "application/json",
                                "access-control-allow-origin"     : "*",
                                "Access-Control-Allow-Credentials": true,
                            },
                            credentials: "include"
                        }
    
                        let response = await axios.post(`/auth/forgot-password`, param, config)
                        if (response.status === 200) {
                            await context.attemptingResponseReducer.displayLoaderAction(false, nameForm)
                            await context.responseErrorMessageReducer.setResponseMessageErrorAction(response.data.message, nameForm)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    return null

                    case "updatePassword":
                try {
                    if(context["formValueReducer"][nameForm]["password"]!==context["formValueReducer"][nameForm]["passwordConfirmation"]){
                        await context.attemptingResponseReducer.displayLoaderAction(false, nameForm)
                        await context.responseErrorMessageReducer.setResponseMessageErrorAction("Password Confirmation doesn't match", nameForm)
                        return null
                    }

                    let param  = {
                        password: context["formValueReducer"][nameForm]["password"],
                        token   : Cookies.get('JWT')
                    }
                    let config = {
                        headers    : {
                            Accept                            : "application/json",
                            "Content-Type"                    : "application/json",
                            "access-control-allow-origin"     : "*",
                            "Access-Control-Allow-Credentials": true,
                            'Authorization'                   : `${Cookies.get('JWT')}`
                        },
                        credentials: "include"
                    }

                    let response = await axios.post(`/auth/update-password`, param, config)
                    if (response.status === 200) {
                        
                        await context.attemptingResponseReducer.displayLoaderAction(false, nameForm)
                        await context.responseErrorMessageReducer.setResponseMessageErrorAction(response.data.message, nameForm)
                        
                        if (response.data.redirect) {
                            window.location = response.data.redirect
                        }
                    }
                } catch (e) {
                    console.log(e)
                }
                return null


            default:
                return null

    
            }

        } else {
            console.log("Form doesn't valid!")
        }

        

    }

    // we clcik on send we will cancel our form
    const handleResetClick = (event) => {
        event.preventDefault()
        formReset(formField, nameForm, context)
        
    }

    return (
        <div className="Button">
            {renderInput(buttonField)}
        </div>
    )
}

export default Button;