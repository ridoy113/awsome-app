import { React, useState } from 'react';
import Header from "./components/Header";
import CreateArea from './components/pages/CreateArea';
import Note from "./components/pages/Note";
import Count from "./components/Count";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Calender from './components/pages/Calendar'




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




      <Routes>
        <Route path="/" element={<CreateArea onAdd={addNote} />} />


        <Route path='note' element={

          notes.map((notes, index) => (
            <Note
              key={index}
              id={index}
              title={notes.title}
              content={notes.content}
              onDelete={deleteNotes}
            />
          ))} />

        <Route path='calendar' element={<Calender />} />
      </Routes>





      <Footer />
    </div>
  );
}

export default App;