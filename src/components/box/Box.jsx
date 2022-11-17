import React from 'react';
import styles from './Box.scss';

const Box = ({ title, children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default Box;
