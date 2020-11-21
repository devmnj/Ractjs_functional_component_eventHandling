import React from 'react'

function Button2() {
   
   function handleClick ()  {
    alert('Button 2 - clicked')
  }
  return (
    <div>
      {/* A Regular function */}
      <button onClick={handleClick}>Button2</button>
    </div>
  )
}

export default Button2



