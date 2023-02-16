import NativeSelect from '@mui/material/NativeSelect';
import React from 'react';
import { useNavigate } from 'react-router-dom';


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
  };

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
        <div
          className='book-shelf-changer'
          aria-label='change shelf'>
          <NativeSelect
            className='book-shelf-changer-select'
            defaultValue={shelf || book.shelf ? book.shelf : 'none'}
            onChange={onSelectChange}>
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
        </div>
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>
        {book.authors && `${book.authors.join(', ')}`}
      </div>
    </div>
  );
};

export default Book;
