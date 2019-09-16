import React, { Component } from "react";
const uniqid = require("uniqid");

class FormInput extends Component {
  state = {
    textInput: "",
    dbStorage: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let newObj = {};
    let newArr = [];

    newArr.push(uniqid(), this.state.textInput);
    newObj["id"] = newArr[0];
    newObj["textContent"] = newArr[1];

    this.setState(
      {
        dbStorage: this.state.dbStorage.concat(newObj)
      },
      () => {
        localStorage.setItem("Notes", JSON.stringify(this.state.dbStorage));
        console.log(this.state.dbStorage);
      }
    );
  };

  displayData = () => {
    let displayData;
    if ("textContent" in this.state.dbStorage[0]) {
      displayData = this.state.dbStorage[0]["textContent"];
    }
    return displayData;
  };

  deleteItem = event => {
    let index = event.target.getAttribute("data-key");
    let storedDB = JSON.parse(localStorage.getItem("Notes"));
    storedDB.splice(index, 1);
    this.setState({
      dbStorage: storedDB
    });
    localStorage.setItem("Notes", JSON.stringify(storedDB));
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
        <main>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              <input
                type="text"
                name="textInput"
                value={this.state.textInput}
                onChange={this.handleChange}
                placeholder="write something..."
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </main>

        <div>
          <ul>
            {this.state.dbStorage.map((data, index) => {
              return (
                <li id={data["id"]} key={index}>
                  {data["textContent"]}{" "}
                  <input
                    type="button"
                    value="Delete"
                    onClick={this.deleteItem.bind(this)}
                    data-key={index}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default FormInput;
