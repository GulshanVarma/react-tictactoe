import React,{Component} from 'react'
import './App.css';
import Tictactoe from './tictactoe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>in App</h1>
        <Tictactoe></Tictactoe>
      </div>
    );
  }
}

export default App;
