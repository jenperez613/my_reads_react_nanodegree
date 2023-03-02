import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404: Not Found</title>
      </Helmet>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
        <Typography variant='h1' style={{ color: 'white' }}>
          404: Not Found
        </Typography>
        <Typography variant='h6' style={{ color: 'white' }}>
          Sorry, the page you are looking for could not be found.
        </Typography>
        <Button
          sx={{ mt: 2 }}
          variant='contained'
          component={Link}
          to='/'
          aria-label='back home'>
          Back Home
        </Button>
      </Box>
      <Fab
        component={Link}
        to='/'
        aria-label='add'
        color='secondary'
        sx={{
          position: 'fixed',
          right: '25px',
          bottom: '25px',
        }}>
        <HomeIcon />
      </Fab>
      <Footer />
    </>
  );
};

export default NotFound;
