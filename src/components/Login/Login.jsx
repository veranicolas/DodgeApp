import * as React from 'react'
import { Link } from 'react-router-dom'

import { Box, Typography } from '@mui/material'
import { SignUpForm } from './SignupForm'
import { LoginForm } from './LoginForm'

import * as styles from './StylesLogin'
import './Login.css'

/* 
Al logearse o crear cuenta se debe pasar a la pantalla de homepage.
El token de la sesion se guarda en el localstorage al pasar de pagina.
*/


const Title = () =>
    <Box component="div" sx={{height:'30%'}}>
        <Typography variant="h2" sx={styles.H2Css}>DodgeList</Typography>
        <Typography variant="h6" sx={styles.H6Css}>Don't lose neither your LP nor your time!</Typography>
    </Box>


class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            loginMode: true,
            regions: ['BR','EUNE','EUW','JP','LAN','LAS','NA','OCE','RU','TR','KR']
        }
       this.changeForm = this.changeForm.bind(this)
    }

    changeForm(){
        this.setState(prevState => ({loginMode: !prevState.loginMode}))
    }

    render(){
        const { loginMode, regions } = this.state
        return(
            <div className="mainBox">
                <Box component="div" sx={styles.LoginContainerCss} style={this.props.theme}>
                    <Box component="div" sx={styles.LoginBoxCss}>
                        <Title />
                        {
                            loginMode ? 
                                (<LoginForm change={this.props.change} formType={this.changeForm} check={this.props.check}/>)
                                :
                                (<SignUpForm 
                                    change={this.props.change} 
                                    formType={this.changeForm}
                                    regions={regions}
                                />)
                        }
                        <Typography variant="string" sx={{height:'10%', margin:'10vh 0 0 0'}}>
                            <hr style={styles.HrCss}/>
                            <Link to="/" style={styles.LinkCss}>Forgot your password?</Link>
                        </Typography>
                    </Box>
                </Box>
            </div>
        )
    }
}

    
    

export { Login }