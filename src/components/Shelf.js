import React from 'react';
import Book from './Book';

const Shelf = ({ allBooks, shelf, shelfTitle, updateShelf }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfTitle}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {allBooks.map(b => (
            <li key={b.id}>
              <Book
                book={b}
                shelf={shelf}
                updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
