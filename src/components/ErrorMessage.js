import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';

const ErrorMessage = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
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
              <Button
                sx={{ margin: 2 }}
                variant='contained'
                component={Link}
                to='/search'
                aria-label='back to search'>
                Back to Search
              </Button>
            </Grid>
            <Grid xs={6} item>
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
