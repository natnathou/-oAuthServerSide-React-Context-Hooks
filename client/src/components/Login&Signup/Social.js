import React, { Component } from 'react'
import Context from "../../state/StateContext"
import {SignInSocialNetwork as signInSocialNetwork} from "../../state/actions/SignInSocialNetwork"


export class Social extends Component {

    static contextType=Context


    _handleSignInClickGoogle = () => {
        signInSocialNetwork("google",this.props.nameForm, this.context)
      }

    _handleSignInClickFacebook = () => {
        console.log("ok")
        signInSocialNetwork("facebook",this.props.nameForm, this.context)
      }

    
      _handleSignInClickTwitter = () => {
        signInSocialNetwork("twitter",this.props.nameForm, this.context)
      }

    render() {
        return (
            <div className="ui form">
                <div className="field" onClick={this._handleSignInClickGoogle}>
                    <div className="ui two buttons">
                    <button className="ui google plus button">
                        <i className="google icon"></i>
                        Google
                     </button>
                    </div>                   
                </div>
                <div className="field">
                    <div className="two ui buttons">
                    <button className="ui facebook button" onClick={this._handleSignInClickFacebook}>
                        <i className="facebook icon"></i>
                        Facebook
                    </button>
                    </div>
                </div>
                <div className="field">
                    <div className="two ui buttons">
                    <button className="ui twitter button" onClick={this._handleSignInClickTwitter}>
                        <i className="twitter icon"></i>
                        Twitter
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Social