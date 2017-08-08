import React, { Component } from 'react';

import './SignUp.css';

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            usernameInput: "",
            emailInput: "",
            passwordInput: "",
            confirmPasswordInput: "",
            messageFromPostRequest: undefined,
            errorMessageDisplay: false // Use this to determine whether or not to display messageFromPostRequest on errors
        }
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleConfirmPasswordInput = this.handleConfirmPasswordInput.bind(this);
    }

    handleUsernameInput(e) {
        this.setState({ usernameInput: e.target.value });
    }

    handleEmailInput(e) {
        this.setState({ emailInput: e.target.value });
    }

    handlePasswordInput(e) {
        this.setState({ passwordInput: e.target.value });
    }

    handleConfirmPasswordInput(e) {
        this.setState({ confirmPasswordInput: e.target.value });
    }

    handleLoginRequest(e) {
        e.preventDefault();
    }
    
    render() {
        return(
            <form className="signUpContainer" method="post" onSubmit={this.handleLoginRequest}>
                <input type="text" name="username" value={this.state.usernameInput} onChange={this.handleUsernameInput} placeholder="username" />
                <input type="text" name="email" value={this.state.emailInput} onChange={this.handleEmailInput} placeholder="email" />
                <input type="password" name="password" value={this.state.passwordInput} onChange={this.handlePasswordInput} placeholder="password" />
                <input type="password" name="confirmPassword" value={this.state.confirmPasswordInput} onChange={this.handleConfirmPasswordInput} placeholder="confirm password" />
                <input type="submit" value="Log in" />
                {this.state.messageFromPostRequest}
            </form>
        );
    }
}