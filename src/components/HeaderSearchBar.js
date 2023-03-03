/*Getting "SearchBar.js:28 Uncaught TypeError: useDebounce is not a function
    at SearchBar (SearchBar.js:28:1)"*/

//TODO: fix this error & replace SearchBar with this component

/* import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import NotFound from './NotFound';
import ErrorMessage from './ErrorMessage';
import SyncLoader from 'react-spinners/SyncLoader';
import Fab from '@mui/material/Fab';
import Autocomplete from '@mui/material/Autocomplete';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import {
  SearchIconWrapper,
  Search,
  StyledInputBase,
} from '../utils/searchUtils';
import { Typography, Divider } from '@mui/material';

const HeaderSearchBar = ({
  allBooks,
  updateShelf,
  useDebounce,
  handleBookDetails,
}) => {
  const [query, setQuery] = useState('');
  const [resultsList, setResultsList] = useState([]);
  const [searching, setIsSearching] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      setIsSearching(true);
      setShowNotFound(false);
      try {
        BooksAPI.search(debouncedQuery, 50).then((resultsList) => {
          if (!resultsList.error) {
            setResultsList(resultsList);
          } else {
            setResultsList([]);
          }
          setIsSearching(false);
        });
      } catch (error) {
        setHasError(true);
        setIsSearching(false);
      }
    }
  }, [debouncedQuery]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query && resultsList.length === 0) {
        setShowNotFound(true);
      }
    }, 1500);
    return () => clearTimeout(timerId);
  }, [query, resultsList]);

  if (hasError) {
    return <ErrorMessage />;
  }

  if (showNotFound) {
    return <NotFound />;
  }
  const options = allBooks.map((book) => book.title + book.authors);

  return (
    <>
      <div>
        <div className='loading-box'>
          <SyncLoader
            loading={searching}
            size={50}
            message='Loading Book Results'
          />
        </div>
        <div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Autocomplete
              id='free-solo'
              freeSolo
              handleHomeEndKeys
              clearOnBlur
              selectOnFocus
              options={options}
              renderInput={(params) => (
                <StyledInputBase
                  {...params}
                  type='search'
                  width='100px'
                  placeholder='Search by title or author…'
                  inputProps={{ 'aria-label': 'search' }}
                  value={query}
                  onChange={(e) =>
                    setQuery(
                      e.target.value.trim().replace(/^\s+/, '')
                    )
                  }
                />
              )}
            />
          </Search>
        </div>
            <div className='bookshelf'>
              <Typography
                component='h1'
                variant='h2'
                align='center'
                color='text-primary'
                gutterBottom>
                <Divider
                  textAlign='left'
                  role='presentation'
                  sx={{ margin: 10 }}>
                  Search Results
                </Divider>
              </Typography>
              <div className='search-books-results'>
                <ol className='books-grid'>
                  {resultsList.map((book) => {
                    const resultShelf = allBooks.find(
                      (b) => b.id === book.id
                    );
                    resultShelf
                      ? (book.shelf = resultShelf.shelf)
                      : (book.shelf = 'none');
                    return (
                      <li
                        key={book.id}
                        className='list-books-content'>
                        <Book
                          book={book}
                          updateShelf={updateShelf}
                          handleBookDetails={handleBookDetails}
                        />
                      </li>
                    );
                  })}
                </ol>
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
        </div>
      </div>
      </div>
    </>
  );
};

export default HeaderSearchBar; */
