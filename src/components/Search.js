import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import NotFound from './NotFound';
import ErrorMessage from './ErrorMessage';
import SyncLoader from 'react-spinners/SyncLoader';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Card, Typography, Divider } from '@mui/material';

const Search = ({
  allBooks,
  updateShelf,
  useDebounce,
  book,
  id,
  shelf,
  index,
}) => {
  const [query, setQuery] = useState('');
  const [resultsList, setResultsList] = useState([]);
  const [searching, setIsSearching] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  const navigate = useNavigate();

  //TODO: get book details from search results
  /* const bookId = useParams(id);
  console.log(`BookId: ${book.id}:`, bookId); */

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
      if (debouncedQuery && resultsList.length === 0) {
        setShowNotFound(true);
      }
    }, 1500);
    return () => clearTimeout(timerId);
  }, [debouncedQuery, resultsList]);

  if (hasError) {
    return <ErrorMessage />;
  }

  if (showNotFound) {
    return <NotFound />;
  }

  const handleBookDetails = (event) => {
    event.preventDefault();
    console.log('Clicked book:', book);
    console.log('Book ID:', book?.id);
    navigate(`/books/${book.id}`);
  };

  return (
    <>
      {searching && (
        <div className='loading-box'>
          <SyncLoader
            loading={searching}
            size={50}
            message={'Loading book results...'}
          />
        </div>
      )}
      <div>
        <Card style={{ margin: '60px', padding: '20px' }}>
          <Stack
            spacing={2}
            sx={{ width: 300, marginTop: 10, alignItems: 'center' }}>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text-primary'
              gutterBottom>
              <Divider textAlign='left' role='presentation'>
                Search
              </Divider>
            </Typography>
            <TextField
              id='search-bar'
              value={query}
              type='text'
              onInput={(e) => {
                setQuery(e.target.value)?.trim().replace(/^\s+/, '');
              }}
              label='Enter a title or author'
              variant='outlined'
              placeholder='Search by title or author...'
              options={allBooks.map(
                (book) => book.title + book.authors
              )}
              aria-label='search'
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                width: '300px',
                marginLeft: '30px',
                marginBottom: '50px',
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Card>
      </div>

      {
        <Card style={{ margin: '60px', padding: '20px' }}>
          <Grid>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text-primary'
              gutterBottom>
              <Divider textAlign='left' role='presentation'>
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
                    id='book-search-results'
                      key={book.id}
                      className='list-books-content'
                      onClick={handleBookDetails}
                      style={{ color: '#000' }}>
                      <Book
                        id={book.id}
                        index={index}
                        shelf={shelf}
                        updateShelf={updateShelf}
                        book={book}
                        handleBookDetails={handleBookDetails}
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
          </Grid>
        </Card>
      }
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

export default Search;
