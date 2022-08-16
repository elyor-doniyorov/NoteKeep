import React from 'react';
import logo from './logo.png';

function Header(props) {
  return (
    <div className='flex justify-start ml-3'>
      <img className='w-10 decoration-white' src={logo} alt='logo' />
      <h3 className="text-2xl font-mono hover:font-serif font-semibold my-auto text-#DEF2F1">NoteK</h3>
    </div>
  );
}

export default Header;