import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Repos from './components/repos/Repos';
import Repo from './components/repo/Repo';

import './index.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
);
