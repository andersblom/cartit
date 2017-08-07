import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SignInSignUp from './../../components/SignInSignUp/SignInSignUp'

export default class Authentication extends Component {
    constructor() {
        super();
        this.state = {
            IsUserLoggedIn: false,
            user: undefined 
        }
    }
    
    render() {
        if (this.state.IsUserLoggedIn) {
            return(
                <div>Here are your lists:</div>
            );
        } else {
            return(
                <SignInSignUp />
            );
        }
    }
}