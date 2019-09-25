import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CurrentDate from "./Utils/Date";
import styles from "./styles/appStyles.modules.css";
import "bootstrap/dist/css/bootstrap.min.css";

import uniqid from "uniqid";

class App extends Component {
  state = {
    textInput: "",
    dbStorage: [],
    id: uniqid(),
    editItem: false
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
    console.log(CurrentDate());
    const newItem = {
      id: this.state.id,
      title: this.state.textInput,
      date: CurrentDate()
    };

    let updatedItems = [...this.state.dbStorage, newItem];

    let orderByDate = updatedItems.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    this.setState(
      {
        dbStorage: orderByDate,
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
          alertUser={this.alertUser}
        />
      </div>
    );
  }
}
export default App;
