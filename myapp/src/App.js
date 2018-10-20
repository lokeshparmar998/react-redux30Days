import React, { Component } from 'react';
import NewComp1 from './nestedComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> Hello I'm Lokesh </h1>
       <NewComp1 />
      </div>
      
    );
  }
}

export default App;
