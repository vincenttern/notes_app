import React, { Component } from "react";
import NoteItem from "./NoteItem";

export default class DisplayNotes extends Component {
  render() {
    const { data, handleDelete, handleEdit } = this.props;

    const ulStyle = {
      paddingTop: "10px",
      paddingLeft: "0",
      width: "100%",
      position: "relative",
      left: "50%",
      background: "#101357",
      transform: "translate(-50%, 0)"
    };

    const h3Style = {
      height: "7vh",
      fontSize: 30,
      color: "#fea49f",
      textAlign: "center"
    };

    return (
      <ul style={ulStyle}>
        <h3 style={h3Style}>Current Note</h3>
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
