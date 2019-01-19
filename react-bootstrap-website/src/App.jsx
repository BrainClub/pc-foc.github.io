import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Money from './components/Money';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/money" component={Money} />
        </div>
      </Router>
    );
  }
}

export default App;
