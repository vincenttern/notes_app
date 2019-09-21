import React, { Component } from "react";
import NoteItem from "./NoteItem";

export default class DisplayNotes extends Component {
  render() {
    const { data, handleDelete, handleEdit } = this.props;

    const displayNotes = {
      width: "50%",
      position: "relative",
      left: "50%",
      transform: "translate(-50%, 0)"
    };

    const yourNotes = {
      fontSize: 30,
      textAlign: "center"
    };

    return (
      <ul style={displayNotes}>
        <h3 style={yourNotes}> My Notes</h3>
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
