import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import NotFound from './NotFound';
import ErrorMessage from './ErrorMessage';
import SyncLoader from 'react-spinners/SyncLoader';
import Header from './Header';
import Footer from './Footer';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import HomeIcon from '@mui/icons-material/Home';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ allBooks, updateShelf, useDebounce, book }) => {
  const [query, setQuery] = useState('');
  const [resultsList, setResultsList] = useState([]);
  const [searching, setIsSearching] = useState(false);
  const [hasError, setHasError] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedQuery) {
      setIsSearching(true);
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

  if (hasError) {
    return <ErrorMessage />;
  }

  if (debouncedQuery && resultsList.length === 0) {
    return <NotFound />;
  }

  const handleBookDetails = (event) => {
    event.preventDefault();
    console.log('Clicked book:', book);
    navigate(`/books/${book.id}`);
  };

  return (
    <>
      <div>
        <Header book={book} allBooks={allBooks} />
        <div className='loading-box'>
          <SyncLoader
            loading={searching}
            size={50}
            message='Loading Book Results'
          />
        </div>
        <div>
          <Stack
            spacing={2}
            sx={{ width: 300, marginTop: 10, alignItems: 'center' }}>
            <Autocomplete
              id='free-solo'
              freeSolo
              handleHomeEndKeys
              clearOnBlur
              selectOnFocus
              options={allBooks.map(
                (book) => book.title + book.authors
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder='Search by title or author'
                  type='search'
                  aria-label='search'
                  sx={{
                    backgroundColor: '#fff',
                    color: '#000',
                    width: '300px',
                    marginLeft: '30px',
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={query}
                  onChange={(e) =>
                    setQuery(
                      e.target.value.trim().replace(/^\s+/, '')
                    )
                  }
                />
              )}
            />
          </Stack>
        </div>

        {/* <div className='search-books-bar'>
        <Link to={'/'}>
          <button className='close-search'>Close</button>
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            value={query}
            onChange={(e) =>
              setQuery(e.target.value.trim().replace(/^\s+/, ''))
            }
          /> */}
        {/*  {searching && (
          <div>
            <SyncLoader
              loading={searching}
              size={15}
              message='Searching...'
            />
          </div>
        )} */}
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
                <li key={book.id} className='list-books-content'>
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

      <Footer
        className='footer'
        sx={{ position: 'absolute', bottom: 0 }}
      />
    </>
  );
};

export default Search;
