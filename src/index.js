import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-133410946-2');

function fireTracking() {
    ReactGA.pageview(window.location.hash);
}

ReactDOM.render(<Router onUpdate={fireTracking}><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
