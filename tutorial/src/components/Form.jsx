import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:''
      }
    }
    handleUsernameChange = (event) =>{
     this.setState({
        username : event.target.value
     })
    }

    handleCommentChange = (event) =>{
        this.setState({
           comment : event.target.value
        })
       }
    handleTopicChange = (event) =>{
        this.setState({
           topic : event.target.value
        })
       }
    handleSubmitForm = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
       
    
  render() {
    return (
      <div>
        <form>
            <input type='text' name='' value={this.state.username} onChange={this.handleUsernameChange}/>
            <textarea onChange={this.handleCommentChange}>{this.state.comment}</textarea>
            <div>
                <label>Topic</label>
                <select onChange={this.handleTopicChange} value={this.state.topic}>
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='View'>View</option>
                    </select>
            </div>
            <button type='submit' onClick={this.handleSubmitForm}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
