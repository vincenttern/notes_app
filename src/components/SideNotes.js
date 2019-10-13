import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class SideNotes extends Component {
  render() {
    const { data, sideItemClicked } = this.props;
    var truncateTitles = [];

    data.dbStorage.forEach(item => {
      if (item.title.length > 1 && item.date) {
        let truncateTitle = item.title.substring(0, 64) + " ...";
        let slicedDate = item.date.slice(5, 9);
        truncateTitles.push({
          title: truncateTitle,
          cutDate: slicedDate,
          id: item.id
        });
      }
    });

    const col1 = {
      fontSize: 12,
      paddingRight: 0,
      paddingLeft: 0,
      fontStyle: "italic"
    };
    return (
      <ListGroup variant="flush">
        <h3 style={{ textAlign: "center", color: "#101357" }}>My Notes</h3>
        {truncateTitles.map(item => {
          return (
            <ListGroup.Item
              style={{ padding: "0.7rem 0rem" }}
              key={item.id}
              action
              variant="light"
              onClick={() => sideItemClicked(item.id)}
            >
              <Container>
                <Row>
                  <Col style={{ fontSize: 13 }} sm={11}>
                    {item.title}
                  </Col>
                  <Col sm={1} style={col1}>
                    {item.cutDate}
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}
