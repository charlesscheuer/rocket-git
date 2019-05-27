import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ScrollTop from './ScrollTop';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <ScrollTop>
      <App />
    </ScrollTop>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
