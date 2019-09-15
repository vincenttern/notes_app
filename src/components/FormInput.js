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
    newObj[newArr[0]] = newArr[1];

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
          <p>{this.state.textInput}</p>
        </div>
      </div>
    );
  }
}

export default FormInput;
