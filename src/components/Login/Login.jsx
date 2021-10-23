import { Button, Box, OutlinedInput } from '@mui/material'
/* import { Link, Route, Switch } from 'react-router-dom' */

import './Login.css'

/* 
Este componente deberia poder swapear entre login y signup.
Al logearse o crear cuenta se debe pasar a la pantalla de homepage.
El token de la sesion se guarda en el localstorage al pasar de pagina.
*/

const Form = () =>
    <form style={{display:'flex', flexDirection:'column', width:'80%', margin:'0 auto'}}>
        <OutlinedInput
            sx={{ backgroundColor:'whitesmoke', marginBottom:'3vh'}}
            color="primary" 
            placeholder="Email" 
            variant="outlined" 
            focused
        />
        <OutlinedInput
            sx={{ backgroundColor:'whitesmoke'}}
            type="password"
            color="primary" 
            placeholder="Password" 
            variant="outlined" 
            focused
        />
        <Button color="primary" variant="outlined">Login</Button>
    </form>



const Login = (props) =>{
    return(
        <div className="mainBox">
            <Box component="div" sx={{ height:'100vh', width:'40%'}} style={props.theme}>
                <Box component="div" sx={{padding: '3vh'}}>
                    <Form />
                </Box>
            </Box>
        </div>
            
    )
}

    
    

export { Login }