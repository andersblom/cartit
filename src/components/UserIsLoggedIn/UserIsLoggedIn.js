import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import ShowAllLists from '../ShowAllLists/ShowAllLists';
import UserSettings from '../UserSettings/UserSettings';

export default class UserIsLoggedIn extends Component {
    render() {
        console.log("props: ", this.props)
        return(
            <div>
                User logged in!
                 Nav: <Link to={`${this.props.match.url}`}>Lists</Link> - <Link to={`${this.props.match.url}/settings`}>Settings</Link> 
                <Route exact path={`${this.props.match.url}/`} component={ShowAllLists} />
                <Route path={`${this.props.match.url}/settings`} component={UserSettings} />
            </div>
        )
    }
}