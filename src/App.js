import './App.css';
import React, { Component } from 'react';
import TempButtonsContainer from './containers/TempButtonsContainer';
import HumidButtonContainer from './containers/HumidButtonsContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TempButtonsContainer/>
        <HumidButtonContainer/>
      </div>
  )};

  
  
}

export default App;
