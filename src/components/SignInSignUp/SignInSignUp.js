import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignInSignUp extends Component {
    render() {
        return(
            <div>
                <h1>This is the signIn/signUp component</h1>
                <Link to="/lists">See my lists</Link>
            </div>
        );
    }
}