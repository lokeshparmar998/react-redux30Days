import React, {Component} from 'react';

class Add extends Component{
    state={
        name:null,
        age:null,
        place:null
    }
    handleChane =(e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
       this.props.AddDetails(this.state);
    }

    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChane}/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChane}/> 
                    <label htmlFor="place">Place:</label>
                    <input type="text" id="place" onChange={this.handleChane}/>
                    <button >Submit</button>
                </form>
            </div>
        )
    }

}
export default Add;