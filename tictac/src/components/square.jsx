import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import matrix from './matrix'


var Square = (props) => { 
    //ReactDOM.findDOMNode(element).style.backgroundColor = this.state.isClicked?'black' : 'white'
    
    return (
        <button className="square" 
            onClick={() => {
              console.log("presssssssss");
              props.changePlayer();
            }}
        ></button>
        <script>
          document.= document.getElementsByTagName('button')
        </script>
      ); 
    }
export default Square;
//ReactDOM.render(<Square />, document.getElementById("root"));