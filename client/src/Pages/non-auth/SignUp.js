import React from 'react'
import Layout from '../../components/layouts/Layout';
import styles from '../../Css/Signup.module.css';
import { TextField,Button, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [userDetails , setUserDetails] = useState({
         firstname : "",
         lastname : "",
         email : "",
         age : "",
         gender : "",
         password : ""  
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserDetails(prevState => ({
            ...prevState ,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        const {firstname,lastname,email,age,gender,password} = userDetails;

        try {

            const res = await axios.post('/api/v1/auth/sign-up' , {
                firstname,lastname,email,age,gender,password
            });

            if(res.data.success){
                navigate('/login');
            }
            
        } catch (error) {
            console.log("error in posting data to backend db",error);
        }


    }


  return (
    <Layout>
          <div className={styles.mainForm}>
              <div className={styles.formDisplay}>
                   <Typography variant='h1' sx={{color : "white"}}>  World is Here , Where are you </Typography>
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
              <h1 style={{color : "red",margin : "auto" }}>Let's Connect</h1>
              <TextField type='text' value={userDetails.firstname} label="First Name" name='firstname' variant="outlined"  sx={{marginTop : "7px"}} onChange={handleChange}/>
              <TextField type='text' value={userDetails.lastname} label="Last Name" name='lastname' variant="outlined"  sx={{marginTop : "7px"}} onChange={handleChange} />
              <TextField type='email' value={userDetails.email} label="E-mail" name='email' variant="outlined"  sx={{marginTop : "7px"}} onChange={handleChange}/>
              <TextField type='number'value={userDetails.age} label="Age" name='age' variant="outlined"  sx={{marginTop : "7px"}}onChange={handleChange} />
               
              <FormControl sx={{marginTop : "7px"}}>

                 <InputLabel> Gender </InputLabel>
                 <Select label="Gender" name='gender' value={userDetails.gender} onChange={handleChange}>
                    <MenuItem value="male"> Male </MenuItem>
                    <MenuItem value="female"> Female </MenuItem>
                    <MenuItem value="others"> Others </MenuItem>
                 </Select>

              </FormControl>

              <TextField  type='password' value={userDetails.password} label="Password" name='password' variant="outlined"  sx={{marginTop : "7px"}} onChange={handleChange} />
              <Button variant='outlined'  sx={{marginTop : "7px"}} type='submit'> Create Account </Button>    
              
              </form>
          </div>

    </Layout>
  )
}

export default SignUp;
