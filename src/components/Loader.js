import React from 'react';
import '../App.css';

const Loader = ({ loading, children }) => {
  return (
    <div>{loading && <div className='loader'>{children}</div>}</div>
  );
};

export default Loader;
