import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent';
import NavbarComponent from './NavbarComponent';
import ProfComponent from './ProfComponent';
import ProfListComponent from './ProfListComponent';
import Rating from './Rating';
import Login from './Login';
import Register from './Register';
import CreateProfForm from './CreateProfForm';

const default404 = () => {
  return (
    <div>
      <h3>You are lost.</h3>
    </div>
  )
};

class App extends Component {
  constructor() {
    super()

    this.state = {
      activeSession: undefined
    };

    this.endSession.bind(this);
    this.beginSession.bind(this);
  }

  endSession = () => {
    localStorage.removeItem('sessionId');
    this.setState({
      activeSession: localStorage.getItem('sessionId')
    });
    console.log('Active Session:', this.state.activeSession);
    console.log('SessionId', localStorage.getItem('sessionId'));
  }

  beginSession = () => {
    this.setState({
      activeSession: localStorage.getItem('sessionId')
    })
    console.log('Active Session:', this.state.activeSession);
    console.log('SessionId', localStorage.getItem('sessionId'));
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent activeSession={ this.state.activeSession } onLogout={ this.endSession }/>
        <Switch>
            <Route exact path="/" component={ HomeComponent } />
            <Route exact path="/prof" render={(props) => <ProfComponent {...props} /> } />
            <Route exact path="/profList" render={(props) => <ProfListComponent {...props} /> } />
            <Route exact path="/login" render={(props) => <Login {...props} onLogin={ this.beginSession } /> } />
            <Route exact path="/register" render={(props) => <Register {...props} /> } />
            <Route exact path="/rating" render={(props) => <Rating {...props} /> } />
            <Route exact path="/create" render={(props) => <CreateProfForm {...props} /> } />
            <Route component={ default404 } />
          </Switch>
      </div>
    );
  }
}

export default App;
