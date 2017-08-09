import React, { Component } from 'react';
import axios from 'axios';

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
        if (localStorage.getItem("cartItloggedIn") && localStorage.getItem("cartItUserID")) {
            axios.get(`http://localhost:3001/api/user/${localStorage.getItem("cartItUserID")}`)
                .then(res =>{
                    this.setState({
                        user: res.data,
                        IsUserLoggedIn: true
                    });
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }

    loginWasSuccessful(user) {
        localStorage.setItem('cartItUserID', user._id);
        localStorage.setItem('cartItloggedIn', true);
        this.setState({
            IsUserLoggedIn: true,
            user: user
        });
    }

    logUserOut() {
        localStorage.removeItem("cartItloggedIn");
        localStorage.removeItem("cartItUserID");
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