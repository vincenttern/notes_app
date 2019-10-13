import React, { Component } from "react";
import NoteItem from "./NoteItem";

import displayNotesStyles from "../styles/scss/DisplayNotes.module.scss";

export default class DisplayNotes extends Component {
  render() {
    const { data, handleDelete, handleEdit } = this.props;

    return (
      <ul className={displayNotesStyles.ul}>
        <h3>Current Note</h3>
        {data.displayItem.length > 0
          ? data.displayItem.map((item, index) => {
              return (
                <NoteItem
                  index={index}
                  data={data}
                  id={item.id}
                  key={item.id}
                  date={item.date}
                  title={item.title}
                  handleEdit={() => handleEdit(item.id)}
                  handleDelete={() => handleDelete(item.id)}
                />
              );
            })
          : null}
      </ul>
    );
  }
}
