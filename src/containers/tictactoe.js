import React, { Component } from 'react';
import './tictactoe.css'
import SquareBox from '../components/squareBox';
import Axios from 'axios'

// login page with auth0
// introduce players
// store boards


class tictactoe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sqaureBoxes: null,
            player: true,
            won: 1,             // 0 : win, 1: playing , 2: draw
            winner: 'E'
        };
    }

    componentDidMount(){
        Axios.get('https://tic-tac-toe-61c47.firebaseio.com/board.json').then(response => {
            console.log(" >>> ",response.data,typeof(response.data))
            this.setState({sqaureBoxes : response.data.split(",")})
        }).catch(error => {
            alert("error on API side getting data")
        })
    }

    checkWin = (stateTemp) => {
        // rules to win
        let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        let check = stateTemp
        let checkDraw = true
        for (let i = 0; i < stateTemp.length; i++){
            if(stateTemp[i] === "E"){
                checkDraw = false
                console.log(i," -- not a draw")
                break
            }
            console.log(stateTemp[i]," its a draw")
        }

        for (let i = 0; i < win.length; i++) {
            let win_t = win[i]
            let a = stateTemp[win_t[0]];
            let b = stateTemp[win_t[1]];
            let c = stateTemp[win_t[2]];
            if (a === b && b === c && (a == 'X' || a == 'O')) {
                return 0
            }
        }

        if(checkDraw === true){
            console.log("returnin 2")
            return 2
        }

    }

    clickHandler = (event) => {
        if (this.state.won === 1) {
            let playerTemp = this.state.player
            let sqaureBoxTemp = [...this.state.sqaureBoxes]
            let id = event.target.id
            try {
                if (id < 9 && id >= 0) {
                    if(sqaureBoxTemp[event.target.id] === 'E'){
                        sqaureBoxTemp[event.target.id] = this.state.player ? "X" : "O"
                        event.target.style.color = "white"
                        this.setState({ sqaureBoxes: sqaureBoxTemp })
                    } else {
                        return;
                    }
                } else {
                    alert('GAME RESTARTED 1')
                    window.location.reload()
                }
            } catch (error) {
                alert('GAME RESTARTED 2')
                window.location.reload()
            }
            if (this.checkWin(sqaureBoxTemp) === 0) {
                let t_winner = playerTemp ? "X" : "O"
                this.setState({ won: 0, winner: t_winner })
            }
            else {
                if(this.checkWin(sqaureBoxTemp) === 2) {
                    this.setState({ won: 2})
                }
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
        let win = null
        console.log(" state.box === ",this.state.sqaureBoxes,typeof(this.state.sqaureBoxes))
        if ( this.state.sqaureBoxes === null){
                final_array = []
        }else {
            // to display boxes
            for (let i = 0; i < this.state.sqaureBoxes.length; i++) {
                if (i % 3 === 0 && i !== 0) {
                    final_array.push(<tr>{disp_array}</tr>)
                    disp_array = []
                }
                disp_array.push(<td key={i} id={i} onClick={this.clickHandler} className="tictactoe"><SquareBox id={i} value={this.state.sqaureBoxes[i]} /></td>)
            }
            final_array.push(<tr>{disp_array}</tr>)

            //check winnings
            if (this.state.won === 0) {
                win = (
                    <div>
                        <h1 style={{ color: "lightskyblue" }}> This Game is won by {this.state.winner}</h1>
                        <button onClick={this.clickReload}> Restart GAME </button>
                    </div>
                )
            }
            if(this.state.won === 2){
                win = (
                    <div>
                        <h1 style={{ color: "lightskyblue" }}> This Game is a Draw</h1>
                        <button onClick={this.clickReload}> Restart GAME </button>
                    </div>
                )
            }
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