import MenuBookIcon from '@mui/icons-material/MenuBook';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { blue, pink } from '@mui/material/colors';
import {
  SearchIconWrapper,
  Search,
  StyledInputBase,
} from '../utils/searchUtils';
import SearchIcon from '@mui/icons-material/Search';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

const Header = ({ useDebounce }) => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    navigate('/search');
  };

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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='coming soon!'
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onInput={handleSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
