import React from 'react';
import Book from './Book';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';

const Shelf = ({ allBooks, shelf, shelfTitle, updateShelf }) => {
  return (
    <div className='bookshelf'>
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='text-primary'
        gutterBottom>
        <Divider textAlign='left' role='presentation'>{shelfTitle}</Divider>
      </Typography>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {allBooks.map((b) => (
            <li key={b.id}>
              <Book
                book={b}
                shelf={shelf}
                updateShelf={updateShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
