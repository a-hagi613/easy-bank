import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import money from "../assets/images/image-currency.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";
import plane from "../assets/images/image-plane.jpg";
import confetti from "../assets/images/image-confetti.jpg";

export default function Articles() {
  return (
    <>
      {" "}
      <center className="m-4">
        <Row>
          <Col>
            <h3>Latest Articles</h3>
          </Col>
        </Row>
      </center>
      <Row className="px-4 ms-5 mt-2 light-grey">
        <Col>
          <Card style={{ width: "18rem" }} className="border-0">
            <Card.Img variant="top" src={money} height={"200px"} />
            <Card.Body>
              <Card.Title>
                Receive money in any currency with no fees
              </Card.Title>
              <Card.Text className="text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text className="text-secondary">
                By Claire Robinson
              </Card.Text>
              <button className="buttons3 gradient  "> Read</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="border-0">
            <Card.Img variant="top" src={restaurant} height={"200px"} />
            <Card.Body>
              <Card.Title>
                Treat yourself without worrying about money
              </Card.Title>
              <Card.Text className="text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text className="text-secondary">
                By Claire Robinson
              </Card.Text>
              <button className="buttons3 gradient  "> Read</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="border-0">
            <Card.Img variant="top" src={plane} height={"200px"} />
            <Card.Body>
              <Card.Title>Take your easybank card wherever you go</Card.Title>
              <Card.Text className="text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text className="text-secondary">
                By Claire Robinson
              </Card.Text>
              <button className="buttons3 gradient  "> Read</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="border-0">
            <Card.Img variant="top" src={confetti} height={"200px"} />
            <Card.Body>
              <Card.Title>
                Our invite-only beta accounts are now live!
              </Card.Title>
              <Card.Text className="text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text className="text-secondary">
                By Claire Robinson
              </Card.Text>
              <button className="buttons3 gradient  "> Read</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
