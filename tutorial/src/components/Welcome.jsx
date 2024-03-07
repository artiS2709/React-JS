import { Component } from 'react';

class Welcome extends Component{
    render(){
        return (
            <>
                <h1>{this.props.topic}</h1>
                <h2>Welcome to React {this.props.name} World!</h2>
                {this.props.children}
            </>
        )
    }
}
export default Welcome;