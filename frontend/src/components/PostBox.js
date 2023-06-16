import React, { useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
// import emotes from "../static/emotes";

const PostBox = ({ userInfo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(userInfo);
  console.log("postbox");
  // Get references to file input and image preview elements
  document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("custom-file");
    const openButton = document.getElementById("openButton");
    // console.log("hi");
    // Add event listener to file input element

    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      const objectUrl = URL.createObjectURL(file);
      console.log(objectUrl);
      console.log(openButton.href);
      // Set image preview element source to object URL
      openButton.href = objectUrl;
    });
    openButton.addEventListener("click", function () {
      window.open(this.href);
    });
  });
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col lg={1} xs={2}>
            <img
              style={{ borderRadius: 50 }}
              src={user.pic}
              alt="Piyush Agarwal"
              width="40"
              // height='35'
            />
          </Col>
          <Col lg={11} md={10} xs={10}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="What's on your mind?"
            ></Form.Control>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        {" "}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "49%" }}>
            <Form.File
              size=""
              // onChange={(e) => loadImage(e.target.files[0])}
              id="custom-file"
              type="image/jpg"
              action="/multiple-upload"
              method="POST"
              label="Photo"
              custom
            />
          </div>
        </div>
        <Button variant="success" style={{ width: "100%", marginTop: 10 }}>
          POST
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default PostBox;
