import React, { Component } from 'react';

import UserIsLoggedIn from '../../components/UserIsLoggedIn/UserIsLoggedIn';
import SignInSignUp from '../../components/SignInSignUp/SignInSignUp';

export default class Authentication extends Component {
    constructor() {
        super();
        this.state = {
            IsUserLoggedIn: false,
            user: undefined 
        }

        this.loginWasSuccessful = this.loginWasSuccessful.bind(this);
        this.logUserOut = this.logUserOut.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("loggedIn")) {
            this.setState({
                user: localStorage.getItem("user"), //Needs to fetch username through AJAX
                IsUserLoggedIn: true
            });
        } else {
            //nah
        }
    }

    loginWasSuccessful(user) {
        localStorage.setItem('user', user.username);
        localStorage.setItem('loggedIn', true);
        this.setState({
            IsUserLoggedIn: true,
            user: user
        });
    }

    logUserOut() {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("user");
        this.setState({
            IsUserLoggedIn: false,
            user: undefined
        });
    }
    
    render() {
        if (this.state.IsUserLoggedIn === true) {
            return(
                <UserIsLoggedIn user={this.state.user} logUserOut={this.logUserOut} {...this.props} />
            );
        } else {
            return(
                <SignInSignUp loginWasSuccessful={this.loginWasSuccessful} />
            );
        }
    }
}