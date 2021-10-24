import { Button, Box, OutlinedInput, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { LoginBoxCss, FormCss, LinkCss, HrCss, ButtonBox, H2Css, H6Css} from './StylesLogin'
import './Login.css'

/* 
Este componente deberia poder swapear entre login y signup.
Al logearse o crear cuenta se debe pasar a la pantalla de homepage.
El token de la sesion se guarda en el localstorage al pasar de pagina.
*/

const Form = (props) =>
    <form style={FormCss}>
        <OutlinedInput
            sx={{backgroundColor:'whitesmoke', marginBottom:'3vh'}}
            color="primary" 
            placeholder="Email" 
            variant="outlined" 
            focused
        />
        <OutlinedInput
            sx={{backgroundColor:'whitesmoke'}}
            type="password"
            color="primary" 
            placeholder="Password" 
            variant="outlined" 
            focused
        />
        <Box component="div" sx={ButtonBox}>
            <Button sx={{color:'#1C9984', textTransform:'none'}} variant="text" onClick={props.change} size="large">Sign up</Button>
            <Button sx={{backgroundColor:'#1C9984', textTransform:'none'}} variant="contained" onClick={props.change} size="large">Login</Button>
        </Box>
    </form>

const Title = () =>
    <Box component="div" sx={{height:'30%'}}>
        <Typography variant="h2" sx={H2Css}>DodgeList</Typography>
        <Typography variant="h6" sx={H6Css}>Don't lose neither your LP nor your time!</Typography>
    </Box>

const Login = (props) =>{
    return(
        <div className="mainBox">
            <Box component="div" sx={{height:'100vh', width:'40%'}} style={props.theme}>
                <Box component="div" sx={LoginBoxCss}>
                    <Title />
                    <Form change={props.change}/>
                    <hr style={HrCss}/>
                    <Typography variant="string" sx={{height:'18%'}}>
                        <Link to="/" style={LinkCss}>Forgot your password?</Link>
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

    
    

export { Login }