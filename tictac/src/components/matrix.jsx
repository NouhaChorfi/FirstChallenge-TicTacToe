import React, { Component } from "react";
import Square from './square'
var Matrix=(props)=>{

    return (
        // i tried to use map for repetition but i didn't have time to fix it 
        //   return (<div> // { this.props.data.map(function(item) {// return <div>{item}</div>// })//}//</div>);
    <table id='matrix'>
        <td> Player: {props.currentPlayer}</td>
        <td>
            <tr><Square id='12' /></tr>
            <tr><Square id='11'/></tr>
            <tr><Square id='12'/></tr>
        </td>
        <td>
            <tr><Square id='20'/></tr>
            <tr><Square id='21'/></tr>
            <tr><Square id='22'/></tr>
        </td>
        <td>
            <tr><Square id='30'/></tr>
            <tr><Square id='31'/></tr>
            <tr><Square id='32'/></tr>
        </td>
    </table>

);

}

export default Matrix;