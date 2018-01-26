import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route exact path="/" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
  ,
  document.getElementById('root'));
