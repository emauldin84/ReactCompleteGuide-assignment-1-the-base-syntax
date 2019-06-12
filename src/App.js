import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  state={
    username: 'emauldin'
  }

  usernameChangeHandler = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }
  
  render () {
    return (
      <div className="App">
        <UserInput usernameChange={this.usernameChangeHandler} currentName={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        
      </div>
    );
  }

} 

export default App;
