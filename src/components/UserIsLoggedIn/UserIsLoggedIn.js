import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import ShowAllLists from '../ShowAllLists/ShowAllLists';
import UserSettings from '../UserSettings/UserSettings';

export default class UserIsLoggedIn extends Component {
    render() {
        return(
            <div>
                User logged in!
                 Nav: <Link to={`${this.props.match.url}`}>Lists</Link> - <Link to={`${this.props.match.url}/settings`}>Settings</Link> - <Link to={`/`} onClick={this.props.logUserOut}>Log out</Link>  
                <Route exact path={`${this.props.match.url}/`} render={() => (<ShowAllLists {...this.props} />)} />
                <Route path={`${this.props.match.url}/settings`} component={UserSettings} />
            </div>
        )
    }
}