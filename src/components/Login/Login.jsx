import { Button } from '@mui/material'
import { Link, Route, Switch } from 'react-router-dom'

import { List } from '../List/List'
import { About } from '../About/About'

/* 
Este componente deberia poder swapear entre login y signup.
Al logearse o crear cuenta se debe pasar a la pantalla de homepage.
El token de la sesion se guarda en el localstorage al pasar de pagina.
*/

const Login = (props) =>
    <div style={props.theme}>
        <h1>This is the login</h1>
        <Button variant="outlined" onClick={props.change}>Change</Button>
        <Link to="/list">List</Link>
        <Link to="/about">About</Link>
        <Switch>
            <Route path="/list">
                <List />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    </div>

export { Login }