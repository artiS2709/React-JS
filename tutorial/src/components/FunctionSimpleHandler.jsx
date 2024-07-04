import React from 'react'

function FunctionSimpleHandler() {
    function clickEvent(){
        console.log("Button Clicked")
    }
  return (
    <div>
      <button onClick={clickEvent}>Function Simple Click</button>
    </div>
  )
}

export default FunctionSimpleHandler
