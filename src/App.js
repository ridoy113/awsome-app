import { React, useState } from 'react';
import Header from "./components/Header";
import CreateArea from './components/pages/CreateArea';
import Note from "./components/pages/Note";
import Count from "./components/Count";



function App(props) {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote]
    })
  }

  function deleteNotes(id) {
    setNotes(preValue => {
      return [...preValue.filter((note, index) =>
        index !== id)]
    })
  }

  return (
    <div>
      <Header />
      <Count count={notes.length === 0 ? " " :
        `Showing ${notes.length} Notes in Database`} />
      <CreateArea onAdd={addNote} />
      {notes.map((notes, index) => (
        <Note
          key={index}
          id={index}
          title={notes.title}
          content={notes.content}
          onDelete={deleteNotes}
        />
      ))}


    </div>
  );
}

export default App;