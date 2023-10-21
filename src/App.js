import React from "react";
import { connect } from "react-redux";
import { fetchAPI } from "./redux/actions/fetchActions";
import { apiSuccess } from "./redux/actions/action";
import Card from "./components/Card";


class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchAPI());
  }
  shouldComponentUpdate(){
    return true;
  }
  render(){
    const {items} = this.props;

    return(
      <div>
        <h1>Hi Im Rijubi</h1>
        {items && items.map((vals) => {return <Card items={vals} />})}
      </div>
    )
  }
}

const MapStateToProps = state => {
  return {
    items: state.reducer.items
    , isLoading: state.reducer.isLoading
    , error: state.reducer.error
  }
}

// const MapDispatchToProps = dispatch =>{
//   return {
//     onFetchApi: () => dispatch(fetchAPI())
//   } 
// }

export default connect(MapStateToProps)(App);


