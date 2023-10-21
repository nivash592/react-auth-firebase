import React from "react";




// Class Component
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'nibash'
      , number: 0
    }
  }

  getSnapshotBeforeUpdate(prevProps, nextState){
      const {number} = nextState;
      return nextState.number !== number;
  }

  render(){

    setTimeout(() =>{
      this.setState({
        number:Math.random()
      })
    },3000)

    console.log('NUmber here', this.state.number);
    
    return(
      <h1>{this.state.number}</h1>
    )
}
}
export default App;


