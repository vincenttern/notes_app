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

  // componentDidMount() {
  //   const rememberMe = localStorage.getItem('t') === 'true';
  //   const user = rememberMe ? localStorage.getItem('user') : '';
  //   this.setState({ user, rememberMe });
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    // const textInput = this.state.dbStorage.concat(this.state.textInput);
    // console.log(textInput);
    // const unqId = this.uniqueId();

    // const newItem = this.state.dbStorage.concat({
    //   unqId: this.state.textInput
    // });

    // const newItem = [uniqid() this.state.textInput];
    // console.log(newItem);
    let newObj = {};
    let newArr = [];

    newArr.push(uniqid(), this.state.textInput);
    newObj[newArr[0]] = newArr[1];
    // console.log(newObj);
    const pushNewItem = this.state.dbStorage.concat(newObj);
    this.setState(
      {
        dbStorage: pushNewItem
      },
      () => {
        localStorage.setItem("Notes", JSON.stringify(this.state.dbStorage));
      }
    );

    console.log(this.state.dbStorage);
  };

  componentDidMount() {
    const retreiveSavedItems = localStorage.getItem("Notes");
    const parseSavedItems = JSON.parse(retreiveSavedItems);

    this.setState({
      dbStorage: parseSavedItems
    });
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
