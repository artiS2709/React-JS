import React, { Component } from 'react'
import UpdatedComponent from './WithCounterHOC'
class ClickCounter extends Component {
    
  render() {
    const {count,incrementCount} = this.props

    return (
      <div>
        <button onClick={incrementCount}>ClicK {count} Times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)
