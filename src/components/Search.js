import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import NotFound from './NotFound';

const Search = ({ allBooks, updateShelf, useDebounce }) => {
  const [query, setQuery] = useState('');
  const [resultsList, setResultsList] = useState([]);
  const [searching, setIsSearching] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      setIsSearching(true);
      BooksAPI.search(debouncedQuery, 50).then((resultsList) => {
        if (!resultsList.error) {
          setResultsList(resultsList);
          setIsSearching(false);
        } else {
          setResultsList([]);
          setIsSearching(false);
        }
      });
    }
  }, [debouncedQuery]);

 /*  useEffect(() => {
    const searchBooks = (query) => {
      if (query) {
        BooksAPI.search(query, 50).then((allBooks) => {
          if (!allBooks.error) {
            setResultsList(allBooks);
          } else {
            setResultsList([]);
          }
        });
      }
      return () => {
        setResultsList([]);
      };
    };
    searchBooks(query);
  }, [query]); */

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to={'/'}>
          <button className='close-search'>Close</button>
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            value={query}
            onChange={(e) => setQuery(e.target.value.trim())}
          />
          {searching && <h1>Searching...</h1>}
        </div>
      </div>
      {resultsList.length !== allBooks.length && (
        <div className='showing-books'>
          <span>
            Now showing {resultsList.length} of {allBooks.length}
          </span>
          <button onClick={(e) => setQuery('')}>Show all</button>
        </div>
      )}
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
              <li key={book.id} className='book-list-item'>
                <Book book={book} updateShelf={updateShelf} />
              </li>
            );
          })}
          {resultsList.length === 0 ? <NotFound /> : null}
        </ol>
      </div>
    </div>
  );
};

export default Search;
