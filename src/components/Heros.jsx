import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import imgMock from "../assets/images/image-mockups.png";

export default function Heros() {
  return (
    <Row>
      <Col lg={5} className="ms-5">
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <h1 className="px-5">Past Generation Digital Banking</h1>
        <p className="px-5 mt-3 text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          libero nesciunt aut consequatur delectus fugit nobis fuga, natus
          necessitatibus ea officiis recusandae aliquam, sint incidunt cumque
          eius veritatis illum provident?
          <br />
          <br />
          <button className="gradient buttons2 p-auto mt-2">
            Request Invite
          </button>
        </p>
      </Col>
      <Col className="ms-5 hero-bg">
        <img src={imgMock} />
      </Col>
    </Row>
  );
}
