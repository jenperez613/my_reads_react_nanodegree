import React from 'react';
import { useNavigate } from 'react-router-dom';
import Book from './Book';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Shelf = ({
  allBooks,
  shelf,
  shelfTitle,
  updateShelf,
  book,
  index,
}) => {
  const navigate = useNavigate();

  const onShelfChange = (e) => {
    const value = e.target.value;
    updateShelf(book, value);
    navigate('/');
  };

  return (
    <div className='bookshelf'>
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='text-primary'
        gutterBottom>
        <Divider textAlign='left' role='presentation'>
          {shelfTitle}
        </Divider>
      </Typography>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {allBooks.map((b) => (
            <li key={b.id}>
              <Book
                id={b.id}
                book={b}
                index={index}
                shelf={shelf}
                updateShelf={updateShelf}
                onShelfChange={onShelfChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
