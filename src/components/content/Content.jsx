import React from 'react';
import Box from '../box/Box';
import ContentMail from '../templates/content/ContentMail';
import './Content.scss';

const Content =() => {
  return (
    <div className='content'>
      <Box title='Sortable'>
        <ContentMail />
      </Box>
    </div>
  );
}

export default Content;
