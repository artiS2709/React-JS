import React, { Component } from 'react'

class FouthApproachEventBindingInClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
    }
    clickHandler = ()=>{
        this.setState(
            {
                message:"Good Bye!"
            }
        )
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
    <button onClick={this.clickHandler}>Fourth Approach Event Bind Click For setState Method- Add binding in constructor</button>
      </div>
    )
  }
}

export default FouthApproachEventBindingInClassComp
