import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default class NoteItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;

    return (
      <li>
        <Paper>{title}</Paper>
        <div className="todo-icon">
          <span onClick={handleEdit}>
            <EditIcon />
          </span>
          <span onClick={handleDelete}>
            <DeleteForeverIcon />
          </span>
        </div>
      </li>
    );
  }
}
