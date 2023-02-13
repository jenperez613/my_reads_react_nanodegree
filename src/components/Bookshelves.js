import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import Header from './Header';
import Footer from './Footer'

const Bookshelves = ({ allBooks, shelf, updateShelf }) => {
  const currentlyReading = allBooks.filter(
    (book) => book.shelf === 'currentlyReading'
  );
  const wantToRead = allBooks.filter(
    (book) => book.shelf === 'wantToRead'
  );
  const read = allBooks.filter((book) => book.shelf === 'read');

  return (
    <div>
      <Header/>

    <div className='list-books'>
      <div className='list-books-content'>
        <div>
          <Shelf
            shelfTitle='Currently Reading'
            allBooks={currentlyReading}
            updateShelf={updateShelf}
          />
          <Shelf
            shelfTitle='Want to Read'
            allBooks={wantToRead}
            updateShelf={updateShelf}
          />
          <Shelf
            shelfTitle='Finished Reading'
            allBooks={read}
            updateShelf={updateShelf}
          />
        </div>
        <div className='open-search'>
          <Link to='/search' className='open-search-button'>
            Add a book
          </Link>
        </div>
      </div>
      </div>
      <Footer/>
      </div>
  );
};

export default Bookshelves;
