import React, { Component } from "react";
import DisplayNotes from "./DisplayNotes";
import TextArea from "./TextArea";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class MainContent extends Component {
  render() {
    const {
      data,
      handleChange,
      handleSubmit,
      handleDelete,
      handleEdit,
      alertUser
    } = this.props;

    return (
      <div>
        <Container style={{ marginTop: 10 }}>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <TextArea
                data={data}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                alertUser={alertUser}
              />
              <DisplayNotes
                data={data}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
