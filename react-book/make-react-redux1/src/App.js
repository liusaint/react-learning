import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <Content></Content>        
      </div>
    );
  }
}

export default App;
