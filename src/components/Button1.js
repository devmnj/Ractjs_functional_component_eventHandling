import React from 'react'

function Button1() {

  return (
    <div>
      {/* Inline Arrow function in return Statement */}
      <button onClick={()=> alert('Button1 clicked')}>Button1 - Arrow Fun 1</button>
    </div>
  )
}

export default Button1



