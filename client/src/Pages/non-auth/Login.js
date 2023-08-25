import React from 'react';
import Layout from '../../components/layouts/Layout';
import { TextField,Button, Typography } from '@mui/material';
import styles from '../../Css/Login.module.css';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>

       <div className={styles.mainForm}>
           <div className={styles.formPhoto}>

           </div>
           <div className={styles.form}>

             <h1 style={{color : "red" }}>Login Form</h1>
             
             <form className={styles.formData}>
                <Typography variant='h5' sx={{color : "skyblue" , marginBottom : "10px"}}> Social App </Typography>
                <TextField label="E-mail" name='email' variant="outlined" sx={{margin: "5px"}}/>
                <TextField label="Password" name='password' variant="outlined" sx={{margin: "5px"}}/>

                <Button variant='outlined'> Sign In </Button>

             </form>

             <Typography sx={{ width : "45%" , padding: "10" , marginTop : "10px" , alignItems :"center"}}> 
                  Don't have an account? <NavLink to='/signup' style={({isActive}) => isActive ? {color : "black"} : {color : "red" , textDecoration : "none"}}> Sign Up</NavLink>
              </Typography>

           </div>
       </div>
    </Layout>
  )
}

export default Login;
