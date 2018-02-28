import React, { Component } from 'react';
import './App.css';

import KeywordTerm from './weather/containers/search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container search-bar">
          <KeywordTerm />
        </div>
      </div>
    );
  }
}

export default App;
