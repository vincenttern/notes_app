import React, { Component } from "react";
import NoteItem from "./NoteItem";

export default class DisplayNotes extends Component {
  render() {
    const { data, handleDelete, handleEdit } = this.props;

    return (
      <ul>
        <h3> My Notes</h3>
        {data.dbStorage.map(item => {
          return (
            <NoteItem
              key={item.id}
              title={item.title}
              handleEdit={() => handleEdit(item.id)}
              handleDelete={() => handleDelete(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}
