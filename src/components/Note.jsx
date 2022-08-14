import React from 'react';
import './Note.css';

function Note({title, tagline, content, handleDeleteNote, id}) {
  return (
    <div className='note'>
      <h1>{title}</h1>
      <h3>{tagline}</h3>
      <p>{content}</p>
      <button onClick={() => handleDeleteNote(id)}>Delete</button>
    </div>
  );
}

export default Note;