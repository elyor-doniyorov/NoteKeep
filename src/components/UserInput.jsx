import React, { useState } from 'react';
import './UserInput.css'

function UserInput({onAdd}) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    tagline: '',
    content: ''
  })

  function handleExpanded() {
    setExpanded(true);
  }


  function handleChange(e) {
    const {name, value} = e.target;
    setNote(preValue => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }

  function submitButton(event) {
    onAdd(note);
    setNote({
      title: "",
      tagline: "",
      content: ""
    })
    event.preventDefault();
  }
  return (
    <div>
      <form>
        {isExpanded && (
          <>
        <input 
          type="text" 
          placeholder='Title' 
          name='title'
          value={note.title} 
          onChange={handleChange}
        />
         <br />
        <input 
          type="text" 
          placeholder='Tagline' 
          name='tagline' 
          value={note.tagline}
          onChange={handleChange}
        />
        </>
        )}
        <p>
          <textarea 
            name="content" 
            placeholder='Take a note...'
            value={note.content}
            onChange={handleChange}
            onClick={handleExpanded}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button type="submit" id='sbtn' onClick={submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default UserInput;