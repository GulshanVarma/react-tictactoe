import React, { Component } from 'react';
import './tictactoe.css'
import SquareBox from './squareBox';

class tictactoe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sqaureBoxes: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
            player: true,
            won: false,
            winner: 'E'
        };
    }

    checkWin = (stateTemp) => {
        // rules to win
        let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        let check = stateTemp

        for (let i = 0; i < win.length; i++) {
            console.log("checking for elem = > ", win[i])
            let win_t = win[i]
            let a = stateTemp[win_t[0]];
            let b = stateTemp[win_t[1]];
            let c = stateTemp[win_t[2]];
            if (a === b && b === c && (a == 'X' || a == 'O')) {
                return true
            }
            // if (x.includes(win[i])) {
            //     console.log("returning true")
            //     return true
            // }
            // if (o.includes(win[i])) {
            //     return true
            // }
        };

    }

    clickHandler = (event) => {
        if (!this.state.won) {
            let playerTemp = this.state.player
            let sqaureBoxTemp = [...this.state.sqaureBoxes]
            let id = event.target.id
            try {
                if (id < 9 && id >= 0) {
                    sqaureBoxTemp[event.target.id] = this.state.player ? "X" : "O"
                    event.target.style.color = "white"
                    this.setState({ sqaureBoxes: sqaureBoxTemp })
                } else {
                    alert('GAME RESTARTED 1')
                    window.location.reload()
                }
            } catch (error) {
                alert('GAME RESTARTED 2')
                window.location.reload()
            }
            if (this.checkWin(sqaureBoxTemp)) {
                let t_winner = playerTemp ? "X" : "O"
                this.setState({ won: true, winner: t_winner })
            }
            else {
                playerTemp = !this.state.player
                this.setState({ player: playerTemp })
            }
        }
    }
    clickReload = () => {
        window.location.reload()
    }
    render() {
        let disp_array = []
        let final_array = []
        for (let i = 0; i < this.state.sqaureBoxes.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                final_array.push(<tr>{disp_array}</tr>)
                disp_array = []
            }
            disp_array.push(<td key={i} id={i} onClick={this.clickHandler} className="tictactoe"><SquareBox id={i} value={this.state.sqaureBoxes[i]} /></td>)
        }
        final_array.push(<tr>{disp_array}</tr>)
        let win = null
        if (this.state.won) {
            win = (
                <div>
                    <h1 style={{ color: "lightskyblue" }}> This Game is won by {this.state.winner}</h1>
                    <button onClick={this.clickReload}> Restart GAME </button>
                </div>
            )
        }
        return (
            <div>
                <h1>{this.state.player ? "X" : "O"} Player's Turn</h1>
                <div style={{ display: "inline-flex", marginTop: "50px" }}>
                    <table style={{ backgroundColor: "lightskyblue", color: "lightskyblue", fontWeight: "bolder", fontSize: "x-Large" }}>
                        {React.Children.toArray(final_array)}
                    </table>
                </div>
                {win}
            </div>
        );
    }
}


export default tictactoe;