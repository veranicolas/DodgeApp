import { TextField, Box, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'

import * as styles from './StylesLogin'

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});
    

const LoginForm = (props) =>{

    const registerToken = () =>{
        localStorage.setItem('token_dodge', 'holasi')
        props.check()
    }

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema: validationSchema,
        onSubmit:(values)=>{
            console.log(values)
        }
    })

    return(
        <form onSubmit={formik.handleSubmit} style={styles.FormCss}>
            <TextField
                sx={{marginBottom:'1.8vh'}}
                color="primary" 
                placeholder="Email" 
                variant="outlined"
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <TextField
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
                    Sign up
                </Button>
                <Button 
                    sx={{backgroundColor:'#1C9984', textTransform:'none'}} 
                    variant="contained" 
                    onClick={registerToken} 
                    size="large"
                    type="submit"
                >
                    Login
                </Button>
            </Box>
        </form>
    )
}

export { LoginForm }