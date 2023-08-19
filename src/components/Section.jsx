import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import budget from "../assets/images/icon-budgeting.svg";
import onboarding from "../assets/images/icon-onboarding.svg";
import api from "../assets/images/icon-api.svg";
import online from "../assets/images/icon-online.svg"

export default function Section() {
  return (
    <div className="bg-light">
      <Row className="p-4">
        <Col lg={6}>
          <h3  >Why choose Easybank?</h3>
          
          <p className="text-secondary mt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            non unde eius ducimus animi laboriosam dolorum, fugit, pariatur
            culpa omnis molestiae est dolores quae nihil, rem cumque incidunt
            sequi in?
          </p>
        </Col>
      </Row>
      <br /> <br />
      <Row className="p-4 mx-auto">
        <Col>
          <img className="mb-2" src={online} alt="" />
          <h5 className="mb-3 ">Online Banking</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            saepe, consequatur sapiente molestiae nostrum repellendus fugiat
            debitis.
          </p>
        </Col>
        <Col>
          <img className="mb-2" src={budget} alt="" />
          <h5 className="mb-3 ">Simple Budgeting</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            saepe, consequatur sapiente molestiae nostrum repellendus fugiat
            debitis.
          </p>
        </Col>
        <Col>
          <img className="mb-2" src={onboarding} alt="" />
          <h5 className="mb-3 ">Fast Onboarding</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            saepe, consequatur sapiente molestiae nostrum repellendus fugiat
            debitis.
          </p>
        </Col>
        <Col>
          <img className="mb-2" src={api} alt="" />
          <h5 className="mb-3 ">Open API</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            saepe, consequatur sapiente molestiae nostrum repellendus fugiat
            debitis.
          </p>
        </Col>
      </Row>
      <br /> <br /> <br /> <br />
    </div>
  );
}
