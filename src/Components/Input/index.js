import React from "react";

function Input({onChange}) {
  return (
  <>
    <input type="text" onChange={(e)=>{onChange(e.target.value)}}></input>
  </>
  )
}


export default Input
