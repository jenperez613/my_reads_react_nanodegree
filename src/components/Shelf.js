import React from 'react';
import Book from './Book';

const Shelf = ({ books, id, shelf, title, updateShelf }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book) => (
            <li key={id}>
              <Book
                book={book}
                shelf={shelf}
                changeShelf={updateShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
