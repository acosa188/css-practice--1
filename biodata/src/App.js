import React from 'react';
import {Container} from 'react-bootstrap';
import logo from './logo.svg';
import Navigation from './components/Navigation'
import './App.css';

function App() {
  return (
    <div class="App">
      <Container fluid className="container">
        <Navigation />
        <h1>Hello World!</h1>
      </Container>
    </div>
  );
}

export default App;
