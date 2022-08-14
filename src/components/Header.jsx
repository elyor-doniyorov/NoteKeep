import React from 'react';
import './Header.css';

function Header(props) {
  const logo = <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' alt='logo' />
  return (
    <div className='header'>
      {logo}
      <h3>NoteK</h3>
    </div>
  );
}

export default Header;