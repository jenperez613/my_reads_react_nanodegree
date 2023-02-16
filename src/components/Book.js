import { Fab, NativeSelect } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Book = ({
  book,
  id,
  bookId,
  title,
  authors,
  imageLinks,
  shelf,
  updateShelf,
  getBooks,
}) => {
  const navigate = useNavigate();

  const onShelfChange = (e) => {
    const value = e.target.value;
    updateShelf(book, value);
    navigate('/');
  };

  const onSelectChange = (e) => {
    const value = e.target.value;
    updateShelf(book, value);
    onShelfChange(book, value); //
  }

  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks?.thumbnail})`,
          }}></div>
        <Fab
          component={NativeSelect}
          color='secondary'
          aria-label='change shelf'
          sx={{
            position: 'absolute',
            right: '0',
            bottom: '-10px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}>
          <NativeSelect
            defaultValue={shelf || book.shelf ? book.shelf : 'none'}
            onChange={onSelectChange}
            IconComponent={ExpandMoreIcon}>
            <option value='move' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>
              Currently Reading
            </option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Finished Reading</option>
            <option value='none'>None</option>
          </NativeSelect>
        </Fab>
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>
        {book.authors && `${book.authors.join(', ')}`}
      </div>
    </div>
  );
};

export default Book;
