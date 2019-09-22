import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class TextArea extends Component {
  render() {
    const { data, handleChange, handleSubmit, alertUser } = this.props;

    return (
      <form onSubmit={!data.textInput ? alertUser : handleSubmit}>
        <textarea
          label="Note"
          placeholder="Take down some notes....."
          value={data.textInput}
          onChange={handleChange}
        />

        <Button
          variant={data.editItem ? "warning" : "primary"}
          size="lg"
          block
          type="submit"
        >
          {data.editItem ? "Edit Note" : "Add Note"}
        </Button>
      </form>
    );
  }
}
