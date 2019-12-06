import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent';
import NavbarComponent from './NavbarComponent';
import ProfComponent from './ProfComponent';
import ProfListComponent from './ProfListComponent';
import Rating from './Rating';
import Login from './Login';
import Signup from './Signup';

const default404 = () => {
  return (
    <div>
      <h3>You are lost.</h3>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Switch>
          <Route exact path="/" component={ HomeComponent } />
          <Route exact path="/prof" render={(props) => <ProfComponent {...props} /> } />
          <Route exact path="/profList" render={(props) => <ProfListComponent {...props} /> } />
          <Route exact path="/login" render={(props) => <Login {...props} /> } />
          <Route exact path="/signup" render={(props) => <Signup {...props} /> } />
          <Route exact path="/rating" render={(props) => <Rating {...props} /> } />
          <Route component={ default404 } />
        </Switch>
    </div>
  );
}

export default App;
