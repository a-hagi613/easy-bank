import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../assets/images/logo.svg";

export default function Navbars() {
  return (
    <Row className="sticky-top bg-white  fs-5 ">
      <Col md={2} lg={2} className="ms-4">
        <div className="ms-4">
          <img src={logo} />
        </div>
      </Col>
      <Col lg={6} md={6}>
        <ul className=" list-unstyled d-flex justify-content-around text-secondary mx-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </Col>
      <Col md={3} lg={3} className="ms-5">
        <button className="gradient buttons ms-5 p-auto ">
          Request Invite
        </button>
      </Col>
    </Row>
  );
}
