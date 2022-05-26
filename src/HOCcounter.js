import React, { useState } from 'react'

function HOCcounter()
{
  const [count,setCount]=useState(0)
  return(
      
  <div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
 
  )
}

export default HOCcounter;