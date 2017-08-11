import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import ShowAllLists from '../../components/ShowAllLists/ShowAllLists';
import UserSettings from '../../components/UserSettings/UserSettings';
import Header from '../../components/Header/Header';

import './UserIsLoggedIn.css';

export default class UserIsLoggedIn extends Component {
    render() {
        return(
            <div>
                <Header {...this.props} />  
                <div className="contentArea">
                    <Route exact path={`${this.props.match.url}/`} render={() => (<ShowAllLists {...this.props} />)} />
                    <Route path={`${this.props.match.url}/settings`} component={UserSettings} />
                </div>
            </div>
        )
    }
}