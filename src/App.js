import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'; //string id generator
import NotesList from './components/NotesList';
import Search from './components/Search'
import Header from './components/Header'

document.title = 'Notes App';

const App = () => {
  const date = new Date();

  //store notes in array, useState hook allows us to track state (data) in function
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Welcome to notes!",
      date: date.toLocaleDateString()
    }
  ]);

  const [searchText, setSearchText] = useState('');

    //retrieve notes from local storage
  useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
      if(savedNotes != null) {
        setNotes(savedNotes);
      }
  }, []); //empty dependency means this only runs on first load 

  //saved the notes
  //lets us run code at certain points in a component's lifecycle or if certain variables change
  useEffect(() => {
      localStorage.setItem('notes-app-data', JSON.stringify(notes)); //key -> value
  }, [notes]); //dependency array

  //useEffect hook allows you to automatically save and retrieve information from storage


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]; //creates a new array with prev notes and new notes
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id); //filter returns a new array with all the notes except the one we want to delete
    setNotes(newNotes);
  };

  return <div className='container'>
        <Header />
        <Search handleSearchNote={setSearchText}/>         
        <NotesList 
          notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
  </div>;
};

export default App;