import React from "react";
import { Link } from "react-router-dom";
import Truncate from "react-truncate";

const DisplayEachNote = ({ currNote, deleteNote }) => {
  return (
    <tbody className="table__tbody">
      {currNote.map(curr => (
        <tr className="table__tr" key={curr._id}>
          <td className="table__td title">
            <Link to={"/edit/" + curr._id}>{TruncateText(curr.title)}</Link>
          </td>
          <td className="table__td subject">{curr.subject}</td>

          <td className="table__td date">{curr.date.substring(0, 10)}</td>
          <td className="table__td">Yes</td>

          <td className="table__td actions">
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

const TruncateText = item => {
  if (item.length) {
    let truncateTitle = item.substring(0, 200) + " ...";

    return truncateTitle;
  }
};

export default DisplayEachNote;
