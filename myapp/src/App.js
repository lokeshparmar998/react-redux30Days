import React, { Component } from 'react';
import Sub from'./subComp';
class App extends Component {
  state={
    details:[
      {name: 'Lokesh',age:20,place:'bhiwani',id:1},
      {name: 'Meenakshi',age:20,place:'gurgaon',id:2},
      {name: 'Rohit',age:21,place:'jhajjar',id:3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hello world
        </h1>
          {/* <Sub name="Lokesh" age="20" place="gurgaon"/>  */} 
          <Sub detail={this.state.details}/>
      </div>
    );
  }
}

export default App;
