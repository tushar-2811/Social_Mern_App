import { Toolbar, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
   <>
     <Toolbar sx={{display : "flex" , justifyContent : "space-evenly" ,border : "0.5px solid black" }}> 


        <Typography> Info | Support | Marketing </Typography>

         <div>
            <InstagramIcon sx={{marginRight : "6px"}}/>
            <FacebookIcon sx={{marginRight : "6px"}}/>
            <TwitterIcon/>
         </div>

        
           
            <Typography> Terms of Use | Privacy Policy</Typography>

     </Toolbar>
   </>
  )
}

export default Footer;
