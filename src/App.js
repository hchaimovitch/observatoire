import React, { Component } from 'react';
import './App.css';
import CloudWord    from './components/cloud-word.jsx';
import Map    from './components/Map.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div><CloudWord /></div>
        <div><Map /></div>
      </div>
      
    );
  }
}

export default App;
