import React from 'react';

const Book = ({book, id, title, author, url, updateShelf}) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${url})`,
          }}></div>
        <div className='book-shelf-changer'>
          <select>
            <option value='none' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>
              Currently Reading
            </option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Finished Reading</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{author}</div>
    </div>
  );
};

export default Book;
