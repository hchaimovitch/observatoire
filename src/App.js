import React, { Component } from 'react';
import './App.css';
import CloudWord    from './components/cloud-word.jsx';  
import Map    from './components/map/index.jsx'; 
//import Sequence from './components/Sequence.jsx'; <div><Sequence /></div>
import Mapping from './components/mapping/index.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div><CloudWord /></div>
        <div><Mapping /></div>
        <div><Map /></div>
      </div>
      
    );
  }
}

export default App;