import React from 'react';

 const Rough=(props)=>{
const Numbers = [1,2,3,4,5,6];
return(
    <>
    <h1>Rough Work</h1>
  { 
Numbers.map((n,index)=><h1 key={index}>{n}</h1>)

  }
    </>
    )
}
export default  Rough;