import React from 'react'
import Context from "../../state/StateContext"
import Form from "../Form/Form"
import buttonField from "../Form/json/buttonField"
import formField from "../Form/json/formField"

class ForgotPassword extends React.Component {
    static contextType=Context

    componentDidMount() {
        this.context.responseErrorMessageReducer.setResponseMessageErrorAction("", `forgotPassword`)
    }

    renderLoader = () => {
        if (this.context.attemptingResponseReducer[`forgotPassword`]) {
            return <div className="ui active inverted dimmer">
                <div className="ui text loader"></div>
            </div>

        }
    }

    render() {
        return (
            <div className="ui placeholder segment">
                <div className="ui one column centered grid">
                    <div className="column">
                        <Form
                            formField={formField[`forgotPassword`]}
                            buttonField={buttonField[`forgotPassword`]}
                            nameForm={`forgotPassword`}
                        />
                    </div>
                </div>
                {this.renderLoader()}
            </div>
        )
    }

}


export default ForgotPassword