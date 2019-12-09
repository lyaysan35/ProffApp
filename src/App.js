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
import AccountComponent from './AccountComponent';

const default404 = () => {
  return (
    <div>
      <h3>You are lost.</h3>
    </div>
  )
};

const defaultUser = {
  name: 'Emperor Brian',
  field: 'Trouble-Making',
  subfield: 'Messes',
  location: 'Denver, CO',
  bio: 'I like mee-mee, cartoons, and baby cars'
};

class App extends Component {
  constructor() {
    super()

    this.state = {
      activeSession: localStorage.getItem('sessionId'),
      user: ''
    };
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
    });
    console.log('Active Session:', this.state.activeSession);
    console.log('SessionId', localStorage.getItem('sessionId'));
  }

  updateProf = (updatedProf) => {
    this.setState({
      user: updatedProf
    });
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
            <Route exact path="/register" render={(props) => <Register {...props} onRegister={ this.beginSession } /> } />
            <Route exact path="/rating" render={(props) => <Rating {...props} /> } />
            <Route exact path="/create" render={(props) => <CreateProfForm {...props} updateProf={ this.updateProf } /> } />
            <Route exact path="/account" render={(props) => <AccountComponent {...props} professional={ this.state.user || defaultUser } updateProf={ this.updateProf } endSession={ this.endSession } /> } />
            <Route component={ default404 } />
          </Switch>
      </div>
    );
  }
}

export default App;
