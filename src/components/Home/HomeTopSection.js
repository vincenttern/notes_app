import React, { Component } from "react";

import MainContent from "../Notes/MainContent";
import CurrentDate from "./Utils/Date";

import "bootstrap/dist/css/bootstrap.min.css";

import uniqid from "uniqid";

class HomeTopSection extends Component {
  state = {
    textInput: "",
    dbStorage: [],
    id: uniqid(),
    editItem: false,
    displayItem: ""
  };

  alertUser = event => {
    event.preventDefault();
    alert("Please write some text");
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ textInput: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.textInput,
      date: CurrentDate()
    };

    let updatedItems = [...this.state.dbStorage, newItem];

    let orderByDate = updatedItems.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    let itemEdited;
    if (this.state.filteredEditItem) {
      itemEdited = this.state.textInput;
    }

    this.setState(
      {
        dbStorage: orderByDate,
        textInput: "",
        id: uniqid(),
        editItem: false,
        myEditItem: itemEdited
      },
      () => localStorage.setItem("Notes", JSON.stringify(this.state.dbStorage))
    );
  };

  handleDelete = id => {
    const filterdNotes = this.state.dbStorage.filter(item => item.id !== id);
    this.setState(
      {
        dbStorage: filterdNotes,
        displayItem: ""
      },
      localStorage.setItem("Notes", JSON.stringify(filterdNotes))
    );
  };

  handleEdit = id => {
    const filterdNotes = this.state.dbStorage.filter(item => item.id !== id);
    const filteredEditItem = this.state.dbStorage.filter(
      item => item.id === id
    );
    const selectedNote = this.state.dbStorage.find(item => item.id === id);

    this.setState({
      dbStorage: filterdNotes,
      textInput: selectedNote.title,
      filteredEditItem: filteredEditItem,
      editItem: true,
      changedEditTitle: true,
      id: id
    });
  };

  sideItemClicked = id => {
    let itemClicked = this.state.dbStorage.filter(item => item.id === id);
    this.setState({ displayItem: itemClicked, changedEditTitle: false });
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
        <h1>My Notes</h1>
      </div>
    );
  }
}
export default HomeTopSection;

// <MainContent
//         data={this.state}
//         handleChange={this.handleChange}
//         handleSubmit={this.handleSubmit}
//         handleDelete={this.handleDelete}
//         handleEdit={this.handleEdit}
//         alertUser={this.alertUser}
//         sideItemClicked={this.sideItemClicked}
//       />
