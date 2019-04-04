import React from 'react';

const Sub = (props)=> {
    // we can de structure the props by const Sub = ({details}) =>{  then we wont need the line below
       const {detail }= props; //we dont need this as we are passing props and not using the instance.
        const detailList =detail.map(make1 => {
            return (
                <div className="details" key={make1.id}>
                <h1>Name:{make1.name}</h1> 
                <h1>Age:{make1.age}</h1> 
                <h1>place:{make1.place}</h1> 
                </div>
            )
        })
        return(
            <div className="sub">
                {
                    detailList
                }
            </div> 
        );
  
}
export default Sub;