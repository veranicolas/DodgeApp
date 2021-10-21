// core
import React from 'react';

// 3rd party
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container } from '@mui/material';

// components
import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'

// assets
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      login: true,
    }
  }

  render(){
    const { login } = this.state 

    return (
      <Router>
        <Container>
          {
            login ? <Login /> : <Home />
          }
        </Container>
  
        {/* <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch> */}
      </Router>
    );
  }
}

export default App;
