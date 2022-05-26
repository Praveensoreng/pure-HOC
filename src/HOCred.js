import React from "react"
function HOCRed(props)
{
  return <h2 style={{backgroundColor:'red',width:200}}>Red<props.cmp /></h2>
}

export default HOCRed;