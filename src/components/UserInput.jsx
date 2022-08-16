import React, { useState } from 'react';

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
      <form className='relative w-40 sm:w-48 md:w-72 lg:w-80 xl:w-96 2xl:w-96 mx-auto my-3 p-4 rounded-lg bg-#FEFFFF shadow-2xl'>
        {isExpanded && (
          <>
        <input 
          className='w-full text-sm border-none outline-none p-1 mb-2 tracking-wide'
          type="text" 
          placeholder='Title' 
          name='title'
          maxLength={15}
          value={note.title} 
          onChange={handleChange}
        />
         <br />
        <input 
          className='w-full text-sm border-none outline-none p-1 mb-2 tracking-wide'
          type="text" 
          placeholder='Tagline' 
          name='tagline' 
          maxLength={20}
          value={note.tagline}
          onChange={handleChange}
        />
        </>
        )}
        <p>
          <textarea 
            className='w-full text-sm border-none outline-none resize-none p-1 tracking-wide'
            name="content" 
            placeholder='Take a note...'
            value={note.content}
            maxLength={25}
            onChange={handleChange}
            onClick={handleExpanded}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button className='absolute rounded-full font-mono outline-none italic box-border bg-#17252A text-#DEF2F1 m-1 px-3 py-1 text-xs bottom-0 right-2 border-transparent overflow-hidden tracking-wide' type="submit" id='sbtn' onClick={submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default UserInput;