
import React from "react";
import "./Home.css";
import "../../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import CarouselLogo from "../Service/CarouselLogo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imageData, responsive } from "../Service/data";
import { Card, Col, Container, Row } from "react-bootstrap";

// import './team.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Accordion from "react-bootstrap/Accordion";

export const Home = () => {
  const logo = imageData.map((item) => (
    <CarouselLogo name={item.name} url={item.imageurl} />
  ));
  return (
    <>
      {/* -----------Title Bar Start------------------------- */}
      <div className="inner-banner img-bg">
        <div className="overlay">
          <div className="container py-3">
            <Row className="text-center">
              <Col className="py-4">
                <h1
                  className="fs-1 mt-5 fw-bold"
                  style={{ color: "#ffeb05", fontFamily: "fantasy" }}
                >
                  Home
                </h1>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* ---------------Titel Bar End --------------------------- */}

      {/* Welcome section */}
      <div className="welcome">
        <Container className="py-5 border-bottom border-danger">
          <Row className="">
            {/*  welcome text  */}
            <Col sm={12} md={6}>
              <div className="m-3">
                <h5 className="text-danger fw-normal">Welcome to your</h5>
                <h1 className="fw-bold">QUDS PUBLISHER</h1>
                <p className="fst-italic fw-light">
                  Our expertise lies in guiding authors to secure placements in
                  top-tier journals through rigorous reviewing, insightful
                  analysis, and strategic enhancements. Elevate your scientific
                  pursuits with our dedicated support for the research
                  community. Streamline your research journey by tapping into
                  our proficiency in navigating indexing complexities,
                  encompassing SCI, ESCI, Scopus, WOS, and more. Our ultimate
                  goal is to publish manuscripts in journals recognized by
                  prestigious entities like HJRS, UGC, and JCR, enhancing the
                  impact of your work and safeguarding authors from potential
                  scams. We stand by our authors throughout the entire process,
                  including assistance with journal APCs. Beyond publication, we
                  cultivate collaboration within our network, providing a
                  dynamic platform for your research to truly shine. Join us and
                  amplify the reach and influence of your scientific
                  contributions.
                </p>
                
                <h6 className="fst-italic">
                  {" "}
                  <span className="text-danger">Quds </span> Publihsers
                </h6>
              </div>
            </Col>

            {/* welcome image  */}
            <Col sm={12} md={5}>
              <Card className="m-2 border-rounded border-2">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="../../img/logo.png"
                    style={{ widht: "350px", height: "280px" }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <br />
      <div id="hero">
        <div className="container">
          <div className="icon-container">
            <div className="icon-box">
              <i className="bi bi-card-icon"></i>
              <h3>
                <Link to="#">Journals</Link>
              </h3>
            </div>
            <div className="icon-box">
              <i className="bi bi-card-icon"></i>
              <h3>
                <Link to="#">Publishing House</Link>
              </h3>
            </div>
            <div className="icon-box">
              <i className="bi bi-card-icon"></i>
              <h3>
                <Link to="#">In-silico Servics</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="container-fluid p-5 g-2">
        <h1 className="text-center" style={{ color: "goldenrod" }}>
          Our Trusted Clients
        </h1>
        <Carousel showDots={true} responsive={responsive} transition="slide 3s">
          {logo}
        </Carousel>
      </div>

      <hr className="divider" />

      {/* ------------------ Service Card layout Start --------------------- */}

      <div className="card-group justify-content-center p-1 bg-black">
        <h1 className="text-danger">Our Team Services and publication</h1>
        <div className="row">
          {/* --------------------Card 1 ------------------------- */}
          <div className="col">
            <div className="card rounded-3">
              <div className="icon">
                <i className="fa fas-dribbble"></i>
              </div>
              <img
                src="../../img/download.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          {/* --------------------Card 2 ------------------------- */}
          <div className="col">
            <div className="card rounded-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          {/* --------------------Card 3 ------------------------- */}
          <div className="col">
            <div className="card rounded-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text bin to additional
                  content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}

      {/* -------------------------- Second Group Services --------------------------------- */}
      <div className="card-group bg-black justify-content-center rounded-bottom">
        <div className="row">
          {/* --------------------Card 4 ------------------------- */}
          <div className="col">
            <div className="card rounded-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          {/* --------------------Card 5 ------------------------- */}
          <div className="col">
            <div className="card rounded-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          {/* --------------------Card 6 ------------------------- */}
          <div className="col">
            <div className="card rounded-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text additional content.
                  This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<br/>
<br/>
      <hr className="divider" />
<br/>
<br/>
      <Accordion defaultActiveKey="0" flush className="p-4">
      <Accordion.Item eventKey="0">
        <h1 className="text-danger">Research collaboration
</h1>
        <Accordion.Header>What is this about?
</Accordion.Header>
        <Accordion.Body>
        Most critical scientific questions or innovative technologies can often be solved by collaboration among teams of researchers with diverse backgrounds. The fusion of different fields can enable the achievement of incredible goals. Collaborative research can be defined as research that involves coordination among researchers, institutions, organizations, and/or communities. Collaboration can be classified as voluntary cooperation, consortium, association, merger, and fusion, and can occur at five different levels: within a discipline, interdisciplinary, multidisciplinary, transdisciplinary, or national or international. 

        </Accordion.Body>
      </Accordion.Item>
      
      {/* ------------ Accordin-2 */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why is this important?
 </Accordion.Header>
        <Accordion.Body>Much of scientific work happens through collaboration. But collaboration can also lead to conflict when the roles of different collaborators are unclear or when expectations are not met. Laying clear ground rules and having an open discussion about expectations helps the collaboration run smoothly.  <br/>
Collaboration promotes the building of effective communication and partnerships, and also provides equal opportunity among team members. It honors and respects each member's individual and organizational style. Collaboration also promotes ethical behavior by maintaining honesty, integrity, equity, transparency and confidentiality.
        </Accordion.Body>
      </Accordion.Item>
      
      {/* ------------ Accordin-3 */}
      <Accordion.Item eventKey="2">
        <Accordion.Header>What are the best practices?</Accordion.Header>
        <Accordion.Body>For successful collaboration it is necessary to : <br/>
Address mutual expectations. Each team member may have different expectations about their contribution and the recognition they will receive. If you discuss these expectations openly, it will be easier for each team member to contribute effectively to the project.<br/>
Clearly divide and define who is responsible for what task. Similar to expectations, a clear division of labor makes each team member's role in the project clear. This facilitates conversations about authorship. <br/>
Determine authorship. In a collaborative effort, it may appear that each person has a clear role. However, this assumption can lead to confusion and disagreement about initial authorship. Agree on authorship at the beginning of the project. <br/>
Communicate frequently. Ensure open communication with the team. If you do not have a clear timeline or research goals, it can be easy to lose sight of each other.<br/>
Access to data. Not all parties may have access to all data. A clear conversation at the beginning of the project is necessary to determine who will have access to what information. <br/>
Collaboration in research also means a shared responsibility for the integrity of the research.
        </Accordion.Body>
      </Accordion.Item>
      
      {/* ------------ Accordin-4 */}
      {/* <Accordion.Item eventKey="3">
        <Accordion.Header> </Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item> */}

     </Accordion>
<hr className="divider"/> 



    </>
  );
};
