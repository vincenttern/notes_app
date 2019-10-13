import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import noteItemStyles from "../styles/scss/NoteItem.module.scss";

export default class NoteItem extends Component {
  render() {
    const { data, date, title, handleDelete, handleEdit } = this.props;

    let editedItemTitle;
    if (data.filteredEditItem) {
      editedItemTitle = data.myEditItem;
    }

    return (
      <li className={noteItemStyles.li}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Text>
              {data.changedEditTitle ? editedItemTitle : title}
            </Card.Text>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Button
                  variant="outline-warning"
                  size="sm"
                  onClick={handleEdit}
                >
                  <EditIcon />
                </Button>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Button
                  variant="outline-danger"
                  size="sm"
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
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                <Button variant="outline-info" disabled>
                  {date}
                </Button>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Card.Body>
        </Card>
      </li>
    );
  }
}
