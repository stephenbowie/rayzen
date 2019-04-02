import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Contact from '../src/components/Contact';
import Home from '../src/components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
        </Container>
      </Router>
    );
  }
}

export default App;
