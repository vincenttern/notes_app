import React, { Component } from "react";
import DisplayNotes from "./DisplayNotes";
import TextArea from "./TextArea";
import SideNotes from "./SideNotes";

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
      alertUser,
      sideItemClicked
    } = this.props;

    return (
      <main>
        <Container style={{ margin: 30, maxWidth: "95%" }}>
          <Row>
            <Col xs={6} md={4}>
              <SideNotes data={data} sideItemClicked={sideItemClicked} />
            </Col>
            <Col xs={12} md={8}>
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
      </main>
    );
  }
}
