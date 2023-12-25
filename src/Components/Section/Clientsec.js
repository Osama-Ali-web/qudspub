import React from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "react-bootstrap-icons";
import image from '../../img/testimonials/testimonials-3.jpg'

const Clientsec = () => {
  // const image = [
  //   {

  //   }
  // ];
  return (
    <>
      <Carousel interval={5000} controls indicators className="test">
        {/* ----------- Testmonials 1 --------------------- */}
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center justify-content-center h-100 ">
            <img
              className="rounded-circle mt-5"
              src="../../img/testimonials/testimonials-1.jpg"
              alt="Person 1"
            />

            <h5 className="mb-5">
              John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span>
            </h5>
            <div className="p-4 m-4">
              <Carousel.Caption className="text-muted p-2 mt-1 mb-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                "Lorem ipsum <br /> dolor sit amet, consectetur adipiscing
                elit." "Lorem ipsum dolor sit amet, consectetur adipiscing
                elit."
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        {/* ----------Testmonial 2 ------------------- */}
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center justify-content-center h-100 ">
            <img
              className="rounded-circle mt-5"
              src="../../img/testimonials/testimonials-2.jpg"
              alt="Person 1"
            />
            <h5 className="mb-5">
              John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span>
            </h5>
            <div className="p-4 m-4">
              <Carousel.Caption className="text-muted p-2 mt-1 mb-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        {/*-------------------------- Testmonial 3 ---------------------- */}
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center justify-content-center h-100 ">
            <imgl
              className="rounded-circle mt-5"
            src={image}
              alt="Person 1"
            />
            <h5 className="mb-5">
              John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span>
            </h5>
            <div className="p-4 mt-4">
              <Carousel.Caption className="text-muted p-2 mt-1 mb-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        {/* ----------------Testmonial 4 -------------------------- */}

        <Carousel.Item>
          <div className="d-flex flex-column align-items-center justify-content-center h-100 ">
            <img
              className="rounded-circle mt-5"
              src="../../img/testimonials/testimonials-4.jpg"
              alt="Person 1"
            />
            <h5 className="mb-5">
              John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span>
            </h5>
            <div className="p-4 mt-4">
              <Carousel.Caption className="text-muted p-2 mt-2 mb-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        {/* -------------------- Testmonial 5 -------------------------- */}

        <Carousel.Item>
          <div className="d-flex flex-column align-items-center justify-content-center h-100 ">
            <img
              className="rounded-circle mt-5"
              src="../../img/testimonials/testimonials-5.jpg"
              alt="Person 1"
            />
            <h5 className="mb-5">
              John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span>
            </h5>
            <div className="p-4 mt-4">
              <Carousel.Caption className="text-muted p-2 mt-1 mb-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        {/* ----------------Testmonial 6 -------------------------- */}
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img
              className="rounded-circle mt-5"
              src="../../img/testimonials/team-5.jpg"
              alt="Person 1"
            />
            <h5 className="mb-5">
              John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span>
            </h5>
            <div className="p-4 mt-4">
              <Carousel.Caption className="text-muted p-2 mt-1 mb-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        {/* ------------------- Testmonial 7 -------------------------- */}
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img
              className="rounded-circle mt-5"
              src="../../img/testimonials/team-6.jpg"
              alt="Person 1"
            />
            <h5 className="mb-4">
              John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span>
            </h5>
            <div className="p-4 mt-4">
              <Carousel.Caption className="text-muted p-2 mt-2 mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        {/* -------------------End of testomonials ------------------------------ */}
      </Carousel>
    </>
  );
};

export default Clientsec;
