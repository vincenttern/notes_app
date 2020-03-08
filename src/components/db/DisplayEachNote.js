import React from "react";
import { Link } from "react-router-dom";

const DisplayEachNote = ({ currNote, deleteNote }) => {
  return (
    <tbody>
      {currNote.map(curr => (
        <tr key={curr._id}>
          <td>{curr.title}</td>
          <td>{curr.subject}</td>
          <td>{curr.description}</td>
          <td>{curr.date.substring(0, 10)}</td>

          <td>
            <Link to={"/edit/" + curr._id}>edit</Link> |{" "}
            <a href="/" onClick={() => deleteNote(curr._id)}>
              delete
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default DisplayEachNote;
