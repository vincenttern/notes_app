import React, { Component } from "react";
import DisplayNotes from "./DisplayNotes";
import TextArea from "./TextArea";

export default class MainContent extends Component {
  render() {
    const {
      data,
      handleChange,
      handleSubmit,
      handleDelete,
      handleEdit
    } = this.props;

    return (
      <div>
        <TextArea
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <DisplayNotes
          data={data}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    );
  }
}
