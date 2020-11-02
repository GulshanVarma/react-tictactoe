import React,{Component} from 'react'
import './App.css';
import Tictactoe from './containers/tictactoe';
import Login from './components/login'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route path="/play" component={Tictactoe} />
        <Route path="/" component={Login} />
      </Switch>
      </div>
    );
  }
}

export default App;
