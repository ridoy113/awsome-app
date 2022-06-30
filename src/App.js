import React from 'react';
import Header from "./components/Header";
import CreateArea from './components/pages/CreateArea';
import Note from "./components/pages/Note";


function App(props) {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note />


    </div>
  );
}

export default App;