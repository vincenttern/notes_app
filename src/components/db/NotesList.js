import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import DisplayEachNote from "./DisplayEachNote";

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("/notes/")
      .then(response => {
        setNotes(prevState => [...prevState, response.data]);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteNote = id => {
    axios
      .delete("/notes/" + id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    setNotes(notes.filter(note => note.id !== id));
  };

  const notesList = () => {
    return notes.map((currentNote, index) => {
      return (
        <DisplayEachNote
          currNote={currentNote}
          deleteNote={deleteNote}
          key={index}
        />
      );
    });
  };

  return (
    <div>
      <h2>My Notes</h2>

      {notes.length > 0 ? (
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Title</th>
              <th>Subject</th>

              <th>Date</th>
              <td>Reminder</td>
              <th>Actions</th>
            </tr>
          </thead>
          {notesList()}
        </table>
      ) : (
        <h1>No Notes, Add Some to Get Started</h1>
      )}
    </div>
  );
}
