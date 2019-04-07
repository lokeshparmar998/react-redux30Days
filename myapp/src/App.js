import React, { Component } from 'react';
import Sub from'./subComp';
import Add from './Add';
import './index.css'
class App extends Component {
  state={
    details:[
      {name: 'Lokesh',age:20,place:'bhiwani',id:1},
      {name: 'Meenakshi',age:20,place:'gurgaon',id:2},
      {name: 'Rohit',age:21,place:'jhajjar',id:3}
    ]
  }
  AddDetails = (Details) =>{
    Details.id= Math.random();
    let details = [...this.state.details,Details]
    this.setState({
      details:details
    })
  }
  DeleteDetails = (id) =>{
    let details = this.state.details.filter(detail=>{ //filter is a non distructive it will never alter our state it 
                                                      //will create a new array.
      return detail.id !== id //if this return false it will skip that object
    });
    this.setState({
      details:details
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello world
        </h1>
          {/* <Sub name="Lokesh" age="20" place="gurgaon"/>  => used for sending props*/} 
          <Sub detail={this.state.details} DeleteDetails={this.DeleteDetails} />
          <Add AddDetails={this.AddDetails}/>
      </div>
    );
  }
}

export default App;
