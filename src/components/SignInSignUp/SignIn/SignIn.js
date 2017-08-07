import React, { Component } from 'react';

import axios from 'axios';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            usernameInput: "",
            passwordInput: "",
            messageFromPostRequest: undefined
        }
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this)
    }

    handleUsernameInput(e) {
        this.setState({ usernameInput: e.target.value });
    }

    handlePasswordInput(e) {
        this.setState({ passwordInput: e.target.value });
    }

    handleLoginRequest(e) {
        e.preventDefault();

        const formData = {
            username: this.state.usernameInput,
            password: this.state.passwordInput
        }
        console.log(e.target);
        console.log(formData)

        axios.post("http://localhost:3001/api/user/signin", formData)
            .then(res => {
                if (res.status === 200) {
                    // OK 
                    console.log("res: ", res);
                    this.setState({messageFromPostRequest: "Great success!"})
                } else {
                    this.setState({messageFromPostRequest: "Something went wrong! Please try again"})
                    console.error("Didn't get statuscode 200: ", res);
                }
            })
            .catch(err => {
                console.error(err);
                this.setState({messageFromPostRequest: "Username / password did not match. Please try again!"})
            });

    }

    render() {
        return(
            <div>
                <form method="post" onSubmit={this.handleLoginRequest}>
                    <input type="text" name="username" value={this.state.usernameInput} onChange={this.handleUsernameInput} placeholder="username" />
                    <input type="password" name="password" value={this.state.passwordInput} onChange={this.handlePasswordInput} />
                    <input type="submit" value="Log in" />
                    {this.state.messageFromPostRequest}
                </form>
            </div>
        );
    }
}