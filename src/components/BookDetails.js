import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Fab,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SyncLoader from 'react-spinners/SyncLoader';
import ErrorMessage from './ErrorMessage';
import NotFound from './NotFound';
import Share from './Share';
import { Link } from 'react-router-dom';
import '../App.css';
import Footer from './Footer';
import Header from './Header';

const BookDetails = ({ allBooks }) => {
  const [status, setStatus] = useState('');
  const [book, setBook] = useState({});

  const { bookId } = useParams();
  console.log(bookId);

  useEffect(() => {
    setStatus('loading');
    const result = allBooks.find((book) => book.id === bookId);
    if (result) {
      setBook(result);
      setStatus('success');
    } else if (book.errorCode === 500) {
      setStatus('not_found');
    } else {
      setStatus('error');
    }
  }, [allBooks, book, bookId]);

  return (
    <div className='book-detail'>
      <Header />
      <div className='loading-box'>
        <SyncLoader
          loading={status === 'loading'}
          size={50}
          message='Loading Book Details'
        />
      </div>
      {status === 'error' && <ErrorMessage />}
      {status === 'not_found' && <NotFound />}
      {status === 'success' && (
        <Card style={{ margin: '60px', padding: '20px' }}>
          <div>
            <CardHeader
              title={book.title}
              subheader={book.subtitle ? book.subtitle : ''}
            />
            <div className='details-grid'>
              <div className='details-grid-item'>
                <CardMedia
                  component='img'
                  src={book.imageLinks?.thumbnail}
                  alt={book.title}
                />
              </div>
              <div className='details-grid-item'>
                {book.authors && (
                  <div className='detail-prop'>
                    <span className='detail-prop-label'>
                      {book.authors.length > 1
                        ? 'Authors:'
                        : 'Author:'}
                    </span>
                    <span>{`${book.authors.join(', ')}`}</span>
                  </div>
                )}{' '}
                {book.publisher && (
                  <div className='detail-prop'>
                    <span className='detail-prop-label'>
                      Publisher:
                    </span>
                    <span className='detail-prop-content'>
                      {book.publisher}
                    </span>
                  </div>
                )}{' '}
                {book.publishedDate && (
                  <div className='detail-prop'>
                    <span className='detail-prop-label'>
                      Published Date:
                    </span>
                    <span className='detail-prop-content'>
                      {book.publishedDate}
                    </span>
                  </div>
                )}{' '}
                {book.pageCount && (
                  <div className='detail-prop'>
                    <span className='detail-prop-label'>
                      Page Count:
                    </span>
                    <span className='detail-prop-content'>
                      {book.pageCount}
                    </span>
                  </div>
                )}{' '}
                {book.categories && (
                  <div className='detail-prop'>
                    <span className='detail-prop-label'>
                      {book.categories.length > 1
                        ? 'Categories:'
                        : 'Category:'}
                    </span>
                    <span className='detail-prop-content'>
                      {`${book.categories.join(', ')}`}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {book.description}
            </Typography>
          </CardContent>
          <CardActions>
            <div className='share-details'>
              <h3>Share</h3>
              <Share
                props
                title={
                  'My Reads - Sharing book details: ' + book.title
                }
                url={window.location.href}
              />
            </div>
            <Fab
              component={Link}
              to='/'
              aria-label='add'
              color='secondary'
              sx={{
                position: 'fixed',
                right: '25px',
                bottom: '25px',
              }}>
              <HomeIcon />
            </Fab>
          </CardActions>
        </Card>
      )}
      <Footer />
    </div>
  );
};

export default BookDetails;
