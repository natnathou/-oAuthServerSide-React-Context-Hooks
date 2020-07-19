import React, {Component} from 'react'
import Context from "../../state/StateContext"
import Cookies from "js-cookie"
import history from "../../history/History"

class SecurePage extends Component {

    static contextType=Context

        componentDidMount() {
        
        fetch("/auth/login/success", {
            method     : "GET",
            credentials: "include",
            headers    : {
                Accept                            : "application/json",
                "Content-Type"                    : "application/json",
                "Access-Control-Allow-Credentials": true,
                'Authorization'                   : `${Cookies.get('jwt')}`
            }
        })
            .then(response => {
                if (response.status === 200) return response.json();
                throw new Error(`Their are an error in the authentification process. (${response.statusText})`);
            })
            .then(responseJson => {
                if(!responseJson.success){
                    this.context.displayModalReducer.setDisplayModalAction("Authentication is required to access to this page.", true)
                    history.push("/")
                }
            })
            .catch((error) => {
                this.context.displayModalReducer.setDisplayModalAction(error.message, true)
                history.push("/")
            });

    }



    render() {
        return (
            
                <React.Fragment>
                    {
                        this.context.authenticatedReducer.status
                        ?
                        <div>Route Secure</div>
                        :
                        null
                    }
                </React.Fragment>
                

            
            
        )
    }
}



export default SecurePage
