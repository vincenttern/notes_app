import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import uniqid from "uniqid";

class App extends Component {
  state = {
    textInput: "",
    dbStorage: [],
    id: uniqid(),
    editItem: false
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ textInput: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.textInput
    };

    const updatedItems = [...this.state.dbStorage, newItem];

    this.setState(
      {
        dbStorage: updatedItems,
        textInput: "",
        id: uniqid(),
        editItem: false
      },
      () => localStorage.setItem("Notes", JSON.stringify(this.state.dbStorage))
    );
  };

  handleDelete = id => {
    const filterdNotes = this.state.dbStorage.filter(item => item.id !== id);
    this.setState(
      {
        dbStorage: filterdNotes
      },
      localStorage.setItem("Notes", JSON.stringify(filterdNotes))
    );
  };

  handleEdit = id => {
    const filterdNotes = this.state.dbStorage.filter(item => item.id !== id);
    const selectedNote = this.state.dbStorage.find(item => item.id === id);
    console.log(selectedNote);
    this.setState({
      dbStorage: filterdNotes,
      textInput: selectedNote.title,
      editItem: true,
      id: id
    });
  };

  componentDidMount() {
    const retreiveSavedItems = localStorage.getItem("Notes");
    const parseSavedItems = JSON.parse(retreiveSavedItems);

    if (parseSavedItems) {
      this.setState({
        dbStorage: parseSavedItems
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
export default App;
