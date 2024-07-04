import React, { Component } from 'react'

class ClassSimpleHandler extends Component {
  clickHandler(){
    console.log("Clicked the Button")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Simple Click</button>
      </div>
    )
  }
}

export default ClassSimpleHandler
