import React, { Component } from 'react'
import UpdatedComponent from './WithCounterHOC'
class HoverCounter extends Component {
    
  render() {
    const {count, incrementCount} = this.props

    return (
      <div>
        <h2 onMouseOver={incrementCount}> Hovered {count} Times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
