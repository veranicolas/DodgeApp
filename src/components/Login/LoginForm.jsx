import { OutlinedInput, Box, Button } from '@mui/material'

import * as styles from './StylesLogin'

const LoginForm = (props) =>
    <form style={styles.FormCss}>
        <OutlinedInput
            sx={{backgroundColor:'whitesmoke', marginBottom:'1.8vh'}}
            color="primary" 
            placeholder="Email" 
            variant="outlined"
        />
        <OutlinedInput
            sx={{backgroundColor:'whitesmoke'}}
            type="password"
            color="primary" 
            placeholder="Password" 
            variant="outlined"
        />
        <Box component="div" sx={styles.ButtonBox}>
            <Button 
                sx={{color:'#1C9984', textTransform:'none'}} 
                variant="text" 
                size="large"
                onClick={props.formType}  
            >
                Sign up
            </Button>
            <Button 
                sx={{backgroundColor:'#1C9984', textTransform:'none'}} 
                variant="contained" 
                onClick={props.change} 
                size="large"
            >
                Login
            </Button>
        </Box>
    </form>

export { LoginForm }