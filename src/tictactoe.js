import React, { Component } from 'react';
import './tictactoe.css'
import SquareBox from './squareBox';

class tictactoe extends Component {
    constructor(props) {
        super(props);
        this.state = { sqaureBoxes: ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X',] };
    }
    render() {
        let disp_array = []
        let final_array = []
        for (let i = 0; i < this.state.sqaureBoxes.length; i++) {
            if (i % 3 == 0 && i != 0) {
                final_array.push(<tr>{disp_array}</tr>)
                console.log("disp_arr => ",disp_array)
                console.log("final_diss => ",final_array)
                disp_array = []
            }
            console.log(i, ", inserting => ", this.state.sqaureBoxes[i])
            disp_array.push(<td key={i} className="tictactoe">{this.state.sqaureBoxes[i]}</td>)
        }
        final_array.push(<tr>{disp_array}</tr>)
        console.log(" >>> ", disp_array)
        console.log(" FF >>> ", final_array)
        return (
            // display all boxes 3*3
            <div style={{ display: "flex" }}>
                <table style={{ backgroundColor: "lightskyblue", color: "white", fontWeight: "bolder", fontSize: "x-Large" }}>
                   {React.Children.toArray(final_array)}
                </table>
            </div>
        );
    }
}


export default tictactoe;