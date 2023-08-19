import React from "react";
import { Col, Row } from "react-bootstrap";
import logoLite from "../assets/images/logoLite.svg";

import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import youtube from "../assets/images/icon-youtube.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

export default function Footers() {
  return (
    <Row className="dark-blue text-white p-3">
      <Col lg={3}>
        <div>
          <img src={logoLite} className="" />
        </div>
        <div className="mt-5">
          <img className="me-2" src={facebook} alt="" />
          <img className="mx-2" src={twitter} alt="" />
          <img className="mx-2" src={instagram} alt="" />
          <img className="mx-2" src={youtube} alt="" />
          <img className="mx-2" src={pinterest} alt="" />
        </div>
      </Col>
      <Col>
        <ul className="list-unstyled  ">
          <li className="my-2">About</li>
          <li className="my-2">Contact</li>
          <li className="my-2">Blog</li>

        </ul>
        </Col>
        <Col>
        <ul className="list-unstyled  " >
          <li className="my-2">Careers</li>
          <li className="my-2">Support</li>
          <li className="my-2">Privacy Policy</li>

        </ul>
      </Col>
      <Col>
      <button className="gradient buttons ms-5 p-auto ">
          Request Invite
        </button>
        <p className="mt-4">©Easybank. All Right Reserved.</p>

      </Col>
      <br /> <br /> <br /> <br />
    </Row>
  );
}
