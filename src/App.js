import { React, useState } from 'react';
import Header from "./components/Header";
import CreateArea from './components/pages/CreateArea';
import Note from "./components/pages/Note";


function App(props) {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((notes, index) => (
        <Note
          key={index}
          id={index}
          title={notes.title}
          content={notes.content} />
      ))}


    </div>
  );
}

export default App;