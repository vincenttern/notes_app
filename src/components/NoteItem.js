import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default class NoteItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;

    return (
      <li>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Text>{title}</Card.Text>
            <Card.Link>
              <Button variant="warning" onClick={handleEdit}>
                <EditIcon />
              </Button>
            </Card.Link>
            <Card.Link>
              <Button
                variant="danger"
                onClick={() =>
                  confirmAlert({
                    title: "Confirm to submit",
                    message: "Are you sure to do this.",
                    buttons: [
                      {
                        label: "Yes",
                        onClick: () => handleDelete("Click OK To Delete")
                      },
                      {
                        label: "No"
                      }
                    ]
                  })
                }
              >
                <DeleteForeverIcon />
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </li>
    );
  }
}
