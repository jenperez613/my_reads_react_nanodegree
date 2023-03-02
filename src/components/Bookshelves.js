import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Shelf from './Shelf';
import Header from './Header';
import Footer from './Footer';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Bookshelves = ({
  allBooks,
  shelf,
  updateShelf,
  book,
  onShelfChange,
}) => {
  const currentlyReading = allBooks.filter(
    (book) => book.shelf === 'currentlyReading'
  );
  const wantToRead = allBooks.filter(
    (book) => book.shelf === 'wantToRead'
  );
  const read = allBooks.filter((book) => book.shelf === 'read');

  return (
    <div>
      <Header />

      <div className='list-books'>
        <div className='list-books-content'>
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

        <Fab
          component={Link}
          to='/search'
          aria-label='add'
          color='secondary'
          sx={{
            position: 'fixed',
            right: '25px',
            bottom: '25px',
          }}>
          <AddIcon />
        </Fab>
      </div>
      <Footer />
    </div>
  );
};

export default Bookshelves;
