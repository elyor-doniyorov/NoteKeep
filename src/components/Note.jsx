import React from 'react';
import { CgTrash } from 'react-icons/cg';

function Note({title, tagline, content, handleDeleteNote, id}) {
  return (
    <div className='bg-#FEFFFF w-48 rounded-lg shadow-xl p-2 m-3'>
      <h1 className='mb-1 text-base'>{title}</h1>
      <p className='mb-1 text-sm'>{tagline}</p>
      <p className='mb-3 text-xs whitespace-pre-wrap break-words'>{content}</p>
      
      <button className='relative float-right' onClick={() => handleDeleteNote(id)}><CgTrash /></button>
    </div>
  );
}

export default Note;