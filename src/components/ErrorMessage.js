import React from 'react';
import '../App.css';

const ErrorMessage = ({children}) => {
  return <div className='error'>{children}</div>;
};

export default ErrorMessage;
