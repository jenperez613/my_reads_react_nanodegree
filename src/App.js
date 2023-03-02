import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Search from './components/Search';
import Bookshelves from './components/Bookshelves';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setAllBooks(res);
    };
    getBooks();
  }, []);

  const updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    if (shelf === 'none') {
      setAllBooks(allBooks.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setAllBooks(
        allBooks.filter((b) => b.id !== book.id).concat(book)
      );
    }
  };

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  return (
    <div className='app'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Bookshelves
              allBooks={allBooks}
              updateShelf={updateShelf}
            />
          }
        />

        <Route
          path='/search'
          element={
            <Search
              allBooks={allBooks}
              updateShelf={updateShelf}
              useDebounce={useDebounce}
            />
          }
        />
        <Route
          path='/books/:bookId'
          element={<BookDetails allBooks={allBooks} />}
        />
        <Route path='/error' element={<ErrorMessage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
