import React, { useEffect, useState } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Header from './components/Header';
import Bookshelves from './components/Bookshelves';

function App() {
  const [books, setBooks] = useState([]);
  const [showSearchPage, setShowSearchpage] = useState(false);

  useEffect(() => {
    const getBooks = async() => {
      const res = await BooksAPI.getAll()
      setBooks(res)
    }
    getBooks()
   }, [])

  return (
    <div className='app'>
      {showSearchPage ? (
        <div className='search-books'>
          <div className='search-books-bar'>
            <a
              className='close-search'
              onClick={() => setShowSearchpage(!showSearchPage)}>
              Close
            </a>
            <div className='search-books-input-wrapper'>
              <input
                type='text'
                placeholder='Search by title, author, or ISBN'
              />
            </div>
          </div>
          <div className='search-books-results'>
            <ol className='books-grid'></ol>
          </div>
        </div>
      ) : (
        <div className='list-books'>
          <Header/>
          <div className='list-books-content'>
              <Bookshelves books={books } />
          </div>
          <div className='open-search'>
            <a onClick={() => setShowSearchpage(!showSearchPage)}>
              Add a book
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
