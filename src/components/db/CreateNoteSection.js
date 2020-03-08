import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateNoteSection() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const onHandleChange = e => {
    const value = e.target.value;
    const elId = e.target.id;

    if (elId === "title") {
      setTitle(value);
    } else if (elId === "subject") {
      setSubject(value);
    } else if (elId === "description") {
      setDescription(value);
    }
  };

  const onHandleDate = date => {
    setDate(date);
  };

  const onSubmit = e => {
    e.preventDefault();

    const note = {
      title,
      subject,
      description,
      date
    };

    console.log(note);

    axios
      .post("http://localhost:5000/notes/add", note)
      .then(res => console.log(res.data))
      .catch(err => console.log(`My error: ${err}`));

    window.location = "/";
  };

  return (
    <div className="createNote__container">
      <h3>Create New Note</h3>
      <form onSubmit={onSubmit}>
        <div className="title__box">
          <label>Title: </label>
          <input
            type="text"
            required
            id="title"
            className="form-control"
            value={title}
            onChange={onHandleChange}
            placeholder="Title of your note"
          />
        </div>

        <div className="subject__date">
          <div className="subject__date--box">
            <label>Subject: </label>
            <input
              type="text"
              required
              id="subject"
              className="form-control"
              value={subject}
              placeholder="Subject"
              onChange={onHandleChange}
            />
          </div>
          <div className="subject__date--box">
            <label>Date: </label>
            <div>
              <DatePicker id="date" selected={date} onChange={onHandleDate} />
            </div>
          </div>
        </div>
        <div className="description">
          <label>Description: </label>
          <textarea
            type="text"
            required
            id="description"
            value={description}
            placeholder="Write something"
            onChange={onHandleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create New Note"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
