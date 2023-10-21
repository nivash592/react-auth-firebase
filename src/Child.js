import React from "react";


class Child extends React.Component{
    render(){
        return(
            <h1> UUmbu da {this.props.call}</h1>
        )
    }
}

export default Child;