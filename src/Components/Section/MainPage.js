import React from "react";
// import '../Home Page/Home.css'
import { Link } from "react-router-dom";
// import {Home} from "../Home Page/Home";
import "./Main.css";
import "../About/About.css";
import "../../index.css";
import Clientsec from "./Clientsec";
import { Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { imageData, responsive } from "../Service/data";
import CarouselLogo from "../Service/CarouselLogo";
import Carousel from "react-multi-carousel";

export const Mainpage = () => {
  const logo = imageData.map((item) => (
    <CarouselLogo name={item.name} url={item.imageurl} />
  ));
  return (
    <>
      {/* -------------Title Of The Page */}
      <div className="inner-banner img-bg">
        <div className="overlay ">
          <div class="container py-3">
            <Row className="text-center">
              <Col className="py-4">
                <h1
                  className="fs-1 mt-5 fw-bold"
                  style={{ color: "#ffeb05", fontFamily: "fantasy" }}
                >
                  Quds Publisher's
                </h1>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="p-2 bg-black rounded-3 mt-5 justify-content-center "></div>
      <div className="row my-5 mx-3 rounded-3 justify-content-center">
        {/* Card 1 */}
        <div className="col-auto col-md-6 col-lg-4">
          <div className="card upper">
            <div className="card-body upper">
              <h5 className="card-title">Journals</h5>
              <p className="card-text">Will be publish Soon.</p>
              <Link to="#" target="_blank">
                <button className="btn ">Live Soon</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-auto col-md-6 col-lg-4">
          <div className="card upper">
            <div className="card-body upper">
              <h5 className="card-title">Publishing House</h5>
              <p className="card-text">
                Check out services for publication in best jornals.
              </p>
              <Link to="https://www.qudspub.com" target="_top">
                <button className="btn " to="">
                  Visit To Site
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-auto col-md-6 col-lg-4 ">
          <div className="card upper">
            <div className="card-body upper">
              <h5 className="card-title">In-silico Servics</h5>
              <p className="card-text">Will be publish Soon.</p>
              <Link to="#" target="_blank">
                <button className="btn " to="">
                  Live Soon
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 bg-black rounded-3 justify-content-center "></div>
      {/* ------------------------------------------------------------------------ */}

      <br />
      {/* <!-- ======= Hero Section ======= --> */}

      <section id="hero" className="d-flex justify-content-center">
        <div className="container" data-aos="fade-up">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-12 col-xl-6 col-lg-5">
              <h1 style={{ color: "yellowgreen" }}>
                Quds Publisher<span>'s</span>
              </h1>
              <div className="p-2 bg-black rounded-3 justify-content-center "></div>
              <h2
                style={{
                  color: "white",
                  fontSize: "24px",
                  alignText: "center",
                }}
              >
                {" "}
                We excel at guiding researchers towards successful publication
                in prestigious journals. With our expertise in various indexing
                systems (Elsvair, Frontiers, Scopus, WOS) and recognition from
                esteemed bodies (HJRS, UGC, JCR), we ensure your work receives
                the visibility and recognition it deserves.
              </h2>
            </div>
          </div>

          <div
            className="row gy-4 mt-2 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="col-auto col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="bi bi-facebook"></i>
                <h3>
                  <a href="https://web.facebook.com/profile.php?id=100091503754228">
                    facebook
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-auto col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="bi bi-whatsapp"></i>
                <h3>
                  <a href="http://wa.me/+923189050346">whatsapp</a>
                </h3>
              </div>
            </div>
            <div className="col-auto col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="bi bi-instagram"></i>
                <h3>
                  <a href="https://instagram.com/qudspublisher?igshid=MzNlNGNkZWQ4Mg==">
                    instagram
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-auto col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="bi bi-linkedin"></i>
                <h3>
                  <a href="https://www.linkedin.com/in/quds-publisher-8885b8277/">
                    linkedin
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-auto col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="bi bi-twitter"></i>
                <h3>
                  <a href="https://twitter.com/QudsPublisher">twitter</a>
                </h3>
              </div>
            </div>
            <div className="col-auto col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="bi bi-envelope-open"></i>
                <h3>
                  <a href="qudspublisher@gmail.com">Gmail</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero  */}

      {/* Clients carousel Logos */}
      <div className="container mt-5">
        <h1 className="text-center" style={{ color: "goldenrod" }}>

          Our Trusted Client<span>'s</span>
        </h1>
        <br />
        <Carousel showDots={true} responsive={responsive}>
          {logo}
        </Carousel>
      </div>

      <div className="container-fluid mt-5">
        <Clientsec />
      </div>
    </>
  );
};
