import React from 'react';
import Note from './Note';

function NotesList({notes,	handleDeleteNote}) {
  return (
      <div className='grid grid-rows-6 md:grid-rows-2 sm:grid-rows-3 grid-flow-col justify-center gap-1 mt-5'> 
        {notes.map((note,index) => (
            <Note 
              key={index} 
              id={index} 
              title={note.title} 
              tagline={note.tagline} 
              content={note.content} 
              handleDeleteNote={handleDeleteNote}
            />
          ))}
      </div>
  );
}

export default NotesList;
