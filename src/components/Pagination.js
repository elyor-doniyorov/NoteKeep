import React from 'react';
import './Pagination.css';

export const Pagination = ({ notesPerPage, totalNotes, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalNotes/notesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='pageNote'>
            <a href='!#' onClick={() => paginate(number)} className='pageLink'>
              <p>{number}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
