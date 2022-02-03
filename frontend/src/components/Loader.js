import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      style={{
        width: '50px',
        height: '50px',
        margin: 'auto',
        display: 'block',
      }}
      animation='border'
      role='status'
    >
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
