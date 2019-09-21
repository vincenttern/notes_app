import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

export default class TextArea extends Component {
  render() {
    const { data, handleChange, handleSubmit } = this.props;

    const textField = {
      width: "50%",
      height: "50%",
      position: "relative",
      left: "50%",
      transform: "translate(-50%, 0)",
      borderStyle: "ridge",
      marginBottom: 60
    };

    return (
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-multiline-flexible"
          label="Note"
          placeholder="Take down some notes....."
          style={textField}
          multiline
          rows="10"
          margin="normal"
          value={data.textInput}
          onChange={handleChange}
        />
        <br />
        <button type="submit">
          {data.editItem ? "Edit Note" : "Add Note"}
        </button>
      </form>
    );
  }
}
