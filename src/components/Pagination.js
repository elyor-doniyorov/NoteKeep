import React from 'react';

export const Pagination = ({ notesPerPage, totalNotes, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalNotes/notesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className='flex justify-center p-3 m-3'>
        {pageNumbers.map(number => (
          <li key={number} className='px-1 border rounded mx-1'>
            <a href='!#' onClick={() => paginate(number)} className='text-#DEF2F1'>
              <p>{number}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
