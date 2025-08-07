import React, { useState } from 'react'

function Inter() {
    const[count,setcount]=useState(0);
    const changeKaro={
        backgroundColor:" Blue",
        border:"none",
        borderRadius:"10px",
        color:"white",
        fontSize:"15px",
        padding:"5px",
    };
  return (
    <div>
      <button style={changeKaro} onClick={()=>{
        setcount(count+1)
      }}>Count Increase</button>
      <h3>count is : {count}</h3>
    </div>
  )
}

export default Inter
