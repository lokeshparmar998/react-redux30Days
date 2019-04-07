import React from 'react';

const Sub = ({detail,DeleteDetails})=> {

       const detailList =detail.map(make1 => {
            if(make1.age  >10)
            {
                return (
                    <div className="details" key={make1.id}>
                    <h1>Name:{make1.name}</h1> 
                    <h1>Age:{make1.age}</h1> 
                    <h1>place:{make1.place}</h1> 
                    <button onClick={()=> {DeleteDetails(make1.id)}} >Delete</button>
                    </div>
                )
            }
            else{
                return null;
            }
            
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