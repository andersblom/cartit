import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Authentication from './containers/Authentication/Authentication';

import App from './App';
import Homepage from './components/Homepage/Homepage';

import './index.css';

ReactDOM.render((
    <Router>
        <App>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Authentication} />
        </App>
    </Router>
), 
document.getElementById('appContainer'));
registerServiceWorker();
