import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'

import './App.css';

const styleLight = {
  color:'#191919',
  backgroundColor:'#E6E6E6'
}

const styleDark = {
  color:'#E6E6E6',
  backgroundColor:'#191919'
}

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      logged: false,
      theme: styleLight
    }

    this.checkLocalStorage = this.checkLocalStorage.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount(){
    this.checkLocalStorage()
  }

  changeTheme(){
    this.setState((prevState)=>{
      if(prevState.theme === styleLight){
        return { theme: styleDark }
      }
      return { theme:styleLight }
    })
  }

  checkLocalStorage(){
    localStorage.getItem('token_dodge') ? (this.setState(({ logged: true}))) : (this.setState(({logged:false})))
  }

  render(){
    const { logged, theme } = this.state 

    console.log(logged)

    return (
      <Router>
        <Switch>
          <Route path="/" exact render={()=><Redirect to="/login"/>} />
          <Route path="/home" render={()=><Home />} />
          <Route path="/login" render={()=><Login theme={theme} change={this.changeTheme} check={this.checkLocalStorage}/>}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
