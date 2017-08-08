import React, { Component } from 'react';

import ShowAllLists from '../../components/ShowAllLists/ShowAllLists';
import SignInSignUp from '../../components/SignInSignUp/SignInSignUp';

export default class Authentication extends Component {
    constructor() {
        super();
        this.state = {
            IsUserLoggedIn: false,
            user: undefined 
        }

        this.loginWasSuccessful = this.loginWasSuccessful.bind(this);
    }

    loginWasSuccessful(user) {
        this.setState({
            IsUserLoggedIn: true,
            user: user
        });
    }
    
    render() {
        if (this.state.IsUserLoggedIn === true) {
            return(
                <ShowAllLists />
            );
        } else {
            return(
                <SignInSignUp loginWasSuccessful={this.loginWasSuccessful} />
            );
        }
    }
}