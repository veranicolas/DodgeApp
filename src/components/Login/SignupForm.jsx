import * as React from 'react'

import { OutlinedInput, Box, Button, MenuItem, Select } from '@mui/material'

import * as styles from './StylesLogin'

const SignUpForm = (props) =>{

    const [value, setValue] = React.useState('')

    const handleChange = (event) =>{
        setValue(event.target.value)
    }

    return (
        <form style={styles.FormCss}>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <OutlinedInput
                    sx={{backgroundColor:'whitesmoke', marginBottom:'1.8vh', width:'58%'}}
                    color="primary" 
                    placeholder="Username" 
                    variant="outlined" 
                />
                <Select
                    value={value}
                    displayEmpty
                    onChange={handleChange}
                    sx={{backgroundColor:'whitesmoke', marginBottom:'1.8vh', width:'40%'}}
                >
                    <MenuItem value="">Region</MenuItem>
                    { props.regions.map((item, index) =>
                        <MenuItem key={index} value={index}> {item} </MenuItem>
                    )}
                </Select>
            </Box>
            
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
                    Login
                </Button>
                <Button 
                    sx={{backgroundColor:'#1C9984', textTransform:'none'}} 
                    variant="contained" 
                    onClick={console.log('y si')} 
                    size="large"
                >
                    Sign up
                </Button>
            </Box>
        </form>
    )
}

export { SignUpForm }