import MenuBookIcon from '@mui/icons-material/MenuBook';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { blue, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='fixed' className='appbar'>
        <Toolbar>
          <Button component={Link} to='/' aria-label='home'>
            <MenuBookIcon sx={{ mr: 2 }} />
          </Button>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
            }}>
            My Reads
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
