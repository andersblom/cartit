import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

export default class SignInSignUp extends Component {
    constructor() {
        super();
        this.state = {
            signInIsActive: true
        }

        this.toggleSignInUp = this.toggleSignInUp.bind(this);
    }

    toggleSignInUp() {
        if (this.state.signInIsActive == true) {
            this.setState({signInIsActive: false});
        } else {
            this.setState({signInIsActive: true});
        }
    }
    render() {
        return(
            <div>
                <h1>This is the signIn/signUp component</h1>
                <button onClick={this.toggleSignInUp}>{(this.state.signInIsActive) ? "I'd like to sign up" : "I already have a user"}</button>
                {(this.state.signInIsActive) ? 
                    <SignIn />
                    : // else
                    <SignUp />
                }
            </div>
        );
    }
}