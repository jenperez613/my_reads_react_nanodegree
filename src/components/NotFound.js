import React from 'react'
import { Helmet } from 'react-helmet'
import '../NotFound.css'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404: Not Found</title>
      </Helmet>
        <div className='caption'>
          <span>
            Sorry, the page you are looking for could not be found.
          </span>{' '}
          <span>
            Try going back to the <a href='/'>home page</a>.
          </span>
        </div>
    </>
  );
}

export default NotFound