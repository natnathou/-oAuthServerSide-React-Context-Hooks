import {FormErrorReducer} from "./FormErrorReducer"
import {ResponseErrorMessageReducer} from "./ResponseErrorMessageReducer"
import {FormValueReducer} from "./FormValueReducer"
import {FormPropsReducer} from "./FormPropsReducer"
import {AttemptingResponseReducer} from "./AttemptingResponseReducer"
import {AuthenticatedReducer} from "./AuthenticatedReducer"
import {DisplayModalReducer} from "./DisplayModalReducer"


export const Reducers =()=>
{
    return{
        formValueReducer: FormValueReducer(),
        formPropsReducer:FormPropsReducer(),
        formErrorReducer: FormErrorReducer(),
        responseErrorMessageReducer:ResponseErrorMessageReducer(),
        attemptingResponseReducer: AttemptingResponseReducer(),
        authenticatedReducer: AuthenticatedReducer(),
        displayModalReducer: DisplayModalReducer()
    }
}