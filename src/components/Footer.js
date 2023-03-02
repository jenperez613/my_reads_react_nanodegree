import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const Copyright = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='https://jenperez.dev'>
        jenperez
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box
      className='footer'
      component='footer'>
      <Divider textAlign='center' role='presentation'>
        This is the footer
      </Divider>
      <Typography variant='h6' align='center' gutterBottom>
        My Reads
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        color='text.secondary'
        component='p'>
        Created with 💖 by Jen Perez
      </Typography>
      <Copyright />
    </Box>
  );
};

export default Footer;
