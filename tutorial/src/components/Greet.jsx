import React from 'react'

function Greetings(props){    //props with functional component
    return (
        <>
        <h1>{props.topic}</h1>
        <h2>Hello,{props.name}</h2>
        {props.children}
        </>
    
    )
}
 
export default Greetings;