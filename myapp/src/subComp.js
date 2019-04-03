import React, {Component} from 'react';

class Sub extends Component{
    render(){
        const {detail }= this.props; // note: use these {} for props otherwise error
        const detailList =detail.map(make1 => {
            return (
                <div className="details" key={make1.id}>
                <h1>Name:{make1.name}</h1> 
                <h1>Age:{make1.age}</h1> 
                <h1>place:{make1.place}</h1> 
                </div>
            )
        })
        {/*console.log(this.props);
        const {name,age,place}=this.props;  destruct props*/}
        return(
            <div className="sub">
              { /* <h1>Name:</h1> <p>{name}</p> <br/> 
                <h1>Age:</h1> <p>{age}</p> <br/> 
                <h1>place:</h1> <p>{this.props.place}</p> <br/> */}
                {
                    detailList
                }
            </div> 
        );
    } 
}
export default Sub;