import React from "react";

class Children extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            kupudu: ''
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            kupudu: props.kupudu
        }
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <h1>the toxic {this.state.kupudu}</h1>
            </div>
        )
    }
}
export default Children;