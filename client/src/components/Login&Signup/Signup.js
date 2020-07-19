import React from 'react'
import Context from "../../state/StateContext"
import Social from "./Social"
import Form from "../Form/Form"
import buttonField from "../Form/json/buttonField"
import formField from "../Form/json/formField"

class Signup extends React.Component {
    static contextType=Context


    state={mobile: false}

    componentDidMount() {
        this.context.responseErrorMessageReducer.setResponseMessageErrorAction("", `signup`);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions=()=> {
        if(window.innerWidth >=768){
            this.setState({mobile: false})
        } else{
            this.setState({mobile: true})
        }
        
    }

    renderLoader = () => {
        if (this.context.attemptingResponseReducer[`signup`]) {
            return <div className="ui active inverted dimmer">
                <div className="ui text loader"></div>
            </div>
        }
    }

    render() {
        return (
            <div className="ui placeholder segment">
                <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                        <Form
                            formField={formField[`signup`]}
                            buttonField={buttonField[`signup`]}
                            nameForm={`signup`}
                        />
                    </div>
                    <div className="middle aligned column">
                        <Social nameForm={`signup`}/>
                    </div>
                </div>
                {
                    !this.state.mobile
                    ?
                    <div className="ui vertical divider">
                    Or
                    </div>
                    :
                    null
                }
                {this.renderLoader()}
            </div>

        )
    }
}


export default Signup
