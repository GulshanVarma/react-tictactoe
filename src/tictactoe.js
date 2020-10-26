import React, { Component } from 'react';
import './tictactoe.css'
import SquareBox from './squareBox';

class tictactoe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sqaureBoxes: ['E','E','E','E','E','E','E','E','E'],
            player:true
        };
    }

    checkWin = (stateTemp) =>{
        // rules to win
        return false
    }

    clickHandler = (event) => {
        // console.log("clicked > ", event.target.id)

        // make move
        // check if won
        // if not, toggle player
        let playerTemp = null
        let sqaureBoxTemp = [...this.state.sqaureBoxes]
        let id = event.target.id
        try{
            if(id < 9 && id >= 0){
                sqaureBoxTemp[event.target.id] = this.state.player ? "X" : "O"
                event.target.style.color = "white"
                if(! this.checkWin(sqaureBoxTemp)){
                    playerTemp = ! this.state.player
                    this.setState({sqaureBoxes : sqaureBoxTemp, player : playerTemp})
                }
            }else{
                alert('GAME RESTARTED')
                window.location.reload()
            }
        }catch(error){
            window.location.reload()
            alert('GAME RESTARTED')
        }


    }
    render() {
        let disp_array = []
        let final_array = []
        for (let i = 0; i < this.state.sqaureBoxes.length; i++) {
            if (i % 3 == 0 && i != 0) {
                final_array.push(<tr>{disp_array}</tr>)
                disp_array = []
            }
            disp_array.push(<td key={i} id={i} onClick={this.clickHandler} className="tictactoe"><SquareBox id={i} value={this.state.sqaureBoxes[i]} /></td>)
        }
        final_array.push(<tr>{disp_array}</tr>)
        return (
            <div>
                <h1>{this.state.player ? "X" : "O"} Player's Turn</h1>
                <div style={{ display: "inline-flex", marginTop: "50px" }}>
                    <table style={{ backgroundColor: "lightskyblue", color:"lightskyblue" ,fontWeight: "bolder", fontSize: "x-Large" }}>
                        {React.Children.toArray(final_array)}
                    </table>
                </div>
            </div>
        );
    }
}


export default tictactoe;