import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import Header from './Header';

const ErrorMessage = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}>
        <Container maxWidth='md'>
          <Grid container spacing={2}>
            <Grid xs={6} item>
              <Typography variant='h1' style={{ color: 'white' }}>
                Error
              </Typography>
              <Typography variant='h6' style={{ color: 'white' }}>
                An error has occurred. Please try again.
              </Typography>
              <Button
                variant='contained'
                component={Link}
                to='/'
                aria-label='back home'>
                Back Home
              </Button>
            </Grid>
            <Grid xs={6}>
              <img
                src='https://media.giphy.com/media/1RkDDoIVs3ntm/giphy.gif'
                alt='error'
                width={500}
                height={250}
              />
            </Grid>
          </Grid>
        </Container>
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
    </>
  );
};

export default ErrorMessage;
