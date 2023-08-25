import React from 'react';
import {Button, Toolbar, Typography} from '@mui/material'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Toolbar sx={{backgroundColor : "black" , display : "flex" , justifyContent : "space-between"}}>

         <Typography variant='h4' 
                     sx={{color : 'white'}}
            >    Social App 
        </Typography>

        <Button variant='contained'> 
           <NavLink  to='/login' style={({isActive}) => isActive ? {color : "white" , textDecoration : "none" } : {color : "white" , textDecoration : "none"} }> Sign In </NavLink>
        </Button>
        
      </Toolbar>
    </>
  )
}

export default Header;
