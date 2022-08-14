import React from 'react';
import Note from './Note';
import './NotesList.css';

function NotesList({
	notes,
	handleDeleteNote,
}) {
  return (
    <div className='notesInGrid'>
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
