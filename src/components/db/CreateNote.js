import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState([]);
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
    } else {
      setDate(value);
    }
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

    axios.post("/notebeast/notes/add", note).then(res => console.log(res.data));

    console.log("send");
    // window.location = "/";
  };

  return (
    <div>
      <h3>Create New Note</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            id="description"
            className="form-control"
            value={description}
            placeholder="Write something"
            onChange={onHandleChange}
          />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker id="date" selected={date} onChange={onHandleChange} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
