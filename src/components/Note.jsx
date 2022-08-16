import React, {useState} from 'react';
import { CgTrash, CgClose } from 'react-icons/cg';

function Note({title, tagline, content, handleDeleteNote, id, note}) {

  const [open, setOpen] = useState(false);

  function handleClose(id) {
    setOpen(false)
  }
  function handleOpen(id) {
    setOpen(true)
  }

  return (
    <form>
      <div className={open ? 'hidden' : 'bg-#FEFFFF w-24 sm:w-32 md:w-40 lg:w-40 xl:w-48 2xl:w-48 rounded-lg shadow-xl p-2 m-3 h-32'} onClick={() => handleOpen(id)}>
        <h1 className='mb-2 text-xs md:text-base'>{title}</h1>
        <p className='mb-2 text-xs md:text-xs'>{tagline}</p>
        <p className='mb-6 text-xs md:text-xs whitespace-pre-wrap break-words'>{content}</p>
        
        <button className='relative float-right text-#17252A' onClick={() => handleDeleteNote(id)}><CgTrash /></button>
      </div>
      {open && (<div className='bg-#FEFFFF w-64 rounded-lg shadow-xl p-2 m-3 h-40'>
        <h1 className='mb-2 text-xs md:text-lg'>{title}</h1>
        <p className='mb-2 text-xs md:text-base'>{tagline}</p>
        <p className='mb-7 text-xs md:text-base whitespace-pre-wrap break-words'>{content}</p>
        
        <button className='relative float-right text-#17252A mx-1 bottom-0' onClick={() => handleClose(id)}><CgClose /></button>
      </div>)}
    </form>
  );
}

export default Note;