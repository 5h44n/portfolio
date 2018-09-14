import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/partials/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
