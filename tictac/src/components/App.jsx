import React, {Component}from 'react';
//import logo from './logo.svg';
import Matrix from './matrix'
//import '../App.css';

class App extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          currentPlayer: "donuts",
        };
    }
    changePlayer() {
        // if(this.currentPlayer === "donuts"){
        //     this.setState({currentPlayer:'candy'});
        // }
        // if(this.currentPlayer==="candy"){
        //     this.setState({currentPlayer:'donuts'});
        // }       
        console.log("HEllo from App")
    }


  render(){
    return (
      <div className="App">
        <Matrix />
      </div>
    );
  }
  
}

export default App;
