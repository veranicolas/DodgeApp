import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container } from '@mui/material';

import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'

import './App.css';


class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      logged: false,
    }

    this.checkLocalStorage = this.checkLocalStorage.bind(this)
  }

  componentDidMount(){
    this.checkLocalStorage()
  }

  checkLocalStorage(){
    localStorage.getItem('token_dodge') ? (this.setState(({ logged: true}))) : (this.setState(({logged:false})))
  }

  render(){
    const { logged } = this.state 

    return (
      <Router>
        <Container>
          {
            logged ? <Home /> : <Login />
          }
        </Container>
      </Router>
    );
  }
}

export default App;
