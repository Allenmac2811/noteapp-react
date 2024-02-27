import React, { useState } from "react";
import CreateArea from "./Componnets/CreateArea";
import Footer from "./Componnets/Footer";
import Header from "./Componnets/Header";
import Note from "./Componnets/Note";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  // console.log(notes);

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((value, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Note key={1} title={noteItem.title} content={noteItem.content} /> */}
      <Footer />
    </div>
  );
}

export default App;
