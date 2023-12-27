import React from "react";
import "../../index.css";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const Project = () => {
  return (
    <>
      {/* --------------------------------- Title Layout -------------------------------------- */}
      <div className="inner-banner img-bg">
        <div className="overlay">
          <div className="container py-3">
            <Row className="text-center">
              <Col className="py-4">
                <h1
                  className="fs-1 mt-5 fw-bold"
                  style={{ color: "#ffeb05", fontFamily: "fantasy" }}
                >
                  Projects
                </h1>
              </Col>
            </Row>
          </div>
        </div>
      </div>




{/* --------------------------Card Group --------------------------- */}
      <CardGroup className="mt-5 p-1">
{/* ----------------------------Card 1 ----------------------------- */}
        <Card className="border rounded border-warning" >
          <Card.Img
            variant="top"
            src="../../img/portfolio/portfolio-1.jpg"
            height={"100%"}
          />
          <Card.Body>
            <Card.Title>published Work</Card.Title>
          </Card.Body>
        </Card>

        {/* ---------------------------------- Card 2 -------------------------------------- */}
        <Card className="border rounded border-warning">
          <Card.Img
            variant="top"
            src="../../img/portfolio/portfolio-2.jpg"
            height={"100%"}
          />
          <Card.Body>
            <Card.Title>Selected journal</Card.Title>
          </Card.Body>
        </Card>
        {/* ----------------------------------- Card 3 ---------------------------------- */}
        <Card className="border rounded border-warning">
          <Card.Img
            variant="top"
            src="../../img/portfolio/portfolio-3.jpg"
            height={"100%"}
          />
          <Card.Body>
            <Card.Title>journal Matrics</Card.Title>
          </Card.Body>
        </Card>

        {/* ------------------------------- Card 4 ------------------------------------------ */}
        <Card className="border rounded border-warning">
          <Card.Img
            variant="top"
            src="../../img/portfolio/portfolio-4.jpg"
            height={"100%"}
          />
          <Card.Body>
            <Card.Title>Recognition System</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};
