import React, {useState} from 'react';
import { CgTrash, CgClose } from 'react-icons/cg';
import { VscPinned } from 'react-icons/vsc';
import { MdOutlineModeEdit } from 'react-icons/md';

function Note({title, tagline, content, handleDeleteNote, id}) {

  const [edit, setEdit] = useState(false);
  const [pin, setPin] = useState(false);

  function handlePin(id) {
    setPin(true)
  }

  function handleClose(id) {
    setEdit(false)
    setPin(false)
  }
  
  function handleEdit(id) {
    setEdit(true)
  }

  return (
    <form>
      <div className={edit || pin ? 'hidden' : 'bg-#DEF2F1 w-24 sm:w-32 md:w-40 lg:w-40 xl:w-48 2xl:w-48 rounded-lg shadow-xl p-2 m-3 h-32'}>
        <button className='relative float-right text-#3AAFA9' onClick={() => handlePin(id)}><VscPinned /></button>
        <h1 className='mb-2 text-xs md:text-base text-#17252A'>{title}</h1>
        <p className='mb-2 text-xs md:text-xs text-#17252A'>{tagline}</p>
        <p className='mb-6 text-xs md:text-xs whitespace-pre-wrap break-words text-#17252A'>{content}</p>
        <button className='relative float-right text-#3AAFA9' onClick={() => handleDeleteNote(id)}><CgTrash /></button>
        <button className='relative float-right text-#3AAFA9' onClick={() => handleEdit(id)}><MdOutlineModeEdit /></button>
      </div>
      {edit && (<div className='bg-#FEFFFF w-64 rounded-lg shadow-xl p-2 m-3 h-40'>
        <h1 className='mb-2 text-xs md:text-lg'>{title}</h1>
        <p className='mb-2 text-xs md:text-base'>{tagline}</p>
        <p className='mb-7 text-xs md:text-base whitespace-pre-wrap break-words'>{content}</p>
        
        <button className='relative float-right text-#17252A mx-1 bottom-0' onClick={() => handleClose(id)}><CgClose /></button>
      </div>)}
      {pin && (<div className='bg-#DEF2F1 w-64 rounded-lg shadow-xl p-2 m-3 h-40'>
        <h1 className='mb-2 text-xs md:text-lg'>{title}</h1>
        <p className='mb-2 text-xs md:text-base'>{tagline}</p>
        <p className='mb-7 text-xs md:text-base whitespace-pre-wrap break-words'>{content}</p>
        
        <button className='relative float-right text-#17252A mx-1 bottom-0' onClick={() => handleClose(id)}><CgClose /></button>
      </div>)}
    </form>
  );
}

export default Note;