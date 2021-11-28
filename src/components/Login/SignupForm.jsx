import * as React from 'react'

import { TextField, Box, Button, MenuItem, Select } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'

import * as styles from './StylesLogin'

const validationSchema = yup.object({
    username:yup
        .string('Enter your username')
        .required('username is required'),
    region:yup
        .string('Enter your region')
        .required('Region is required'),
    email:yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password:yup
        .string('Enter your password')
        .required('Password is required')
})

const SignUpForm = (props) =>{

    const formik = useFormik({
        initialValues:{
            username:'',
            region:'',
            email:'',
            password:''
        },
        validationSchema: validationSchema,
        onSubmit:(values)=>{
            console.log(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} style={styles.FormCss}>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <TextField
                    sx={{backgroundColor:'whitesmoke', marginBottom:'1.8vh', width:'58%'}}
                    color="primary" 
                    placeholder="Username" 
                    variant="outlined"
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                />
                <Select
                    displayEmpty
                    sx={{backgroundColor:'whitesmoke', marginBottom:'1.8vh', width:'40%'}}
                    id="region"
                    name="region"
                    value={formik.values.region}
                    onChange={formik.handleChange}
                    error={formik.touched.region && Boolean(formik.errors.region)}
                >
                    <MenuItem value="">Region</MenuItem>
                    { props.regions.map((item, index) =>
                        <MenuItem key={index} value={index}> {item} </MenuItem>
                    )}
                </Select>
            </Box>
            
            <TextField
                sx={{backgroundColor:'whitesmoke', marginBottom:'1.8vh'}}
                color="primary" 
                placeholder="Email" 
                variant="outlined"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <TextField
                sx={{backgroundColor:'whitesmoke'}}
                type="password"
                color="primary" 
                placeholder="Password" 
                variant="outlined" 
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
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
                    size="large"
                    type="submit"
                >
                    Sign up
                </Button>
            </Box>
        </form>
    )
}

export { SignUpForm }