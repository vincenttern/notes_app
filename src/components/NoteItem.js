import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default class NoteItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;

    return (
      <li>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Text>{title}</Card.Text>
            <Card.Link>
              <span onClick={handleEdit}>
                <EditIcon />
              </span>
            </Card.Link>
            <Card.Link>
              <span onClick={handleDelete}>
                <DeleteForeverIcon />
              </span>
            </Card.Link>
          </Card.Body>
        </Card>
      </li>
    );
  }
}
