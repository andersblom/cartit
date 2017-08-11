import React, { Component } from 'react';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

import './SignInSignUp.css';

export default class SignInSignUp extends Component {
    constructor() {
        super();
        this.state = {
            signInIsActive: true
        }

        this.toggleSignInUp = this.toggleSignInUp.bind(this);
    }

    toggleSignInUp() {
        if (this.state.signInIsActive === true) {
            this.setState({signInIsActive: false});
        } else {
            this.setState({signInIsActive: true});
        }
    }
    render() {
        return(
            <div className="signInSignUpPageContainer">
                <div className="signInSignUpContainerInner">
                    <h1 className="signInSignUpTitle">{(this.state.signInIsActive) ? "Sign in" : "Sign up"}</h1>
                    {(this.state.signInIsActive) ? 
                        <SignIn {...this.props} />
                        : // else
                        <SignUp />
                    }

                    <a className="signInOrUpToggle" onClick={this.toggleSignInUp}>{(this.state.signInIsActive) ? "I don't have a user" : "I already have a user"}</a>
                </div>
            </div>
        );
    }
}