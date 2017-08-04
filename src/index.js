import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import IsUserLoggedIn from './containers/IsUserLoggedIn/IsUserLoggedIn';

import App from './App';
import SignInSignUp from './components/SignInSignUp/SignInSignUp';
import ShowAllLists from './components/ShowAllLists/ShowAllLists';

import './index.css';

ReactDOM.render((
    <Router>
        <App>
            <Route exact path="/" component={SignInSignUp} />
            <IsUserLoggedIn>
                <Route path="/lists" component={ShowAllLists} />
            </IsUserLoggedIn>
        </App>
    </Router>
), 
document.getElementById('appContainer'));
registerServiceWorker();
