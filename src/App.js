import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import { Pagination } from './components/Pagination';


function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(6);

  const savedNotes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

  const [notes, setNotes] = useState(savedNotes);

  useEffect(() => {
    const json = JSON.stringify(notes);
    window.localStorage.setItem("notes", json);
  }, [notes]);

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)]
    });
  }

  //Get current notes
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  return (
    <div>
      <Header />
      <UserInput onAdd={addNote} />
      <NotesList notes={currentNotes} handleDeleteNote={deleteNotes} handleAddNote={addNote} />
      <Pagination notesPerPage={notesPerPage} totalNotes={notes.length} paginate={paginate} />
    </div>
  );
}

export default App;
