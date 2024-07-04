import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState(
            {
                message:"Good Bye!"
            }
        )
        console.log(this)
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
    {/* <button onClick={this.clickHandler.bind(this)}>First Approach Event Bind Click For setState Method</button> */}
    {/* <button onClick={()=>this.clickHandler()}>Second Approach Event Bind Click For setState Method</button> */}
    <button onClick={this.clickHandler}>Third Approach Event Bind Click For setState Method- Add binding in constructor</button>
      </div>
    )
  }
}

export default EventBind
