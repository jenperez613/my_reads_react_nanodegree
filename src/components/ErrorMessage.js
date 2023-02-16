import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';

const ErrorMessage = ({ children, statusCode }) => (
    <div>
      <Helmet>
    <title>Error</title>
      </Helmet>
      <div style={{ padding: 10 }}>
        <h1>Something went wrong</h1>
        <p>{statusCode ? `A server-side ${statusCode} error occurred.` : 'A client-side error occurred.'}</p>
        <a href="/">Go to the home page</a>
        <div className='error'>{children}</div>
      </div>
    </div>
  );

  ErrorMessage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  }

export default ErrorMessage;
