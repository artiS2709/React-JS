import React, { Component } from 'react'

class Count extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }

  //this is the reason we should not modify the state directly because
  // updated state does not show in UI, it shows in console only in this case 
  // when we update state directly.

  // increment(){       
  //   this.state.count = this.state.count+1
  //   console.log(this.state.count);
  // }



  // At only one place we set state is constructor
  //here is correct way to modify state is setState method
  // 
 
  /*increment(){
    this.setState({
      count : this.state.count+1
    },
    ()=>{
      console.log('Callback Value',this.state.count)
    }
    )
    console.log(this.state.count); 
  }*/



  increment(){
    this.setState(prevState=>({
      count:prevState.count+1
    }))
    console.log(this.state.count)
}

  incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  
  render() {
    return (
      <div>
       <div>Count - {this.state.count}</div>
        <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Count
