import React, { useEffect, useState } from "react";
import {
  faEnvelope,
  faGlobeAsia,
  faHospital,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import User from "./user.svg";
import "./Contact.css";

import Button from "react-bootstrap/Button";
import Select from "react-select";
import Collapse from "react-bootstrap/Collapse";

const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
  );
};

export const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="contact-section ">
        <div className="inner-banner img-bg">
          <div className="overlay">
            <div className="container py-3">
              <Row className="text-center">
                <Col className="py-4">
                  <h1 className="fs-1 mt-5 fw-bold" style={{color:'#ffeb05', fontFamily:'fantasy'}}>
                    Contact Us
                  </h1>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <br />

        {/* Submission a Menu script here */}
        <div className="contaner  bg-body-tertiary">
          <div className="row">
            <div className="col">
              <div className="f-row fs-2 font-roboto text-warning text-center text-bg-darklight">Submit Manuscript</div>
            </div>
          </div>
          <from id="manuscriptForm" className="row gy-2 gx-3 justify-content-center">
            <div className="row g-3">
              <div className="col-auto col-md-6 col-lg-4">
                <div className="details">
                  <img
                    className="img"
                    src={User}
                    alt="Editor"
                    width={18}
                    height={18}
                  />
                  <h2>Auther Details:</h2>
                  </div>    
              </div>
            </div>

            <div className="row gap-0 d-flex">
              <div className="col-auto col-xl-4 col-lg-4  col-md-6 col-sm-10">
                <label>
                  Auther First Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="col-auto col-xl-4 col-lg-4  col-md-6 col-sm-10">
                <label>
                  Auther Last Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="col-auto col-xl-4 col-lg-4  col-md-6 col-sm-10">
                <label>
                  Auther Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                />
              </div>
            </div>


            {/*Seconde Row   */}
            <div className="row gap-0 d-flex">
              <div className="col-auto col-xl-4 col-lg-4  col-md-6 col-sm-10">
                <label>
                  Alterrnate Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Alternate email"
                />
              </div>
              <div className="col-auto col-xl-4 col-lg-4  col-md-6 col-sm-10">
                <label>
                  Phone Number<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-auto col-xl-4 col-lg-4  col-md-6 col-sm-10">
                <label>
                  Choose Your Region<sup>*</sup>
                </label>
                <CountrySelect />
              </div>
            </div>

            {/* Third row */}
            <div className="row">
              <div className="col-auto">
                <div className="details">
                  <i className="bi bi-file-earmark-richtext-fill"></i>
                  <h2>Manuscript Details:</h2>
                </div>
              </div>
            </div>
            <div className="row gap-0 d-flex">
              <div className="col-auto col-xl-6 col-lg-6  col-md-6 col-sm-10">
                <label>
                  Title<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your title"
                />
              </div>
              <div className="col-auto col-xl-6 col-lg-6  col-md-6 col-sm-10">
                <label>
                  Article Type<sup>*</sup>
                </label>
                <select className="form-control form-control-lg">
                  <option>Research Article</option>
                  <option>Review Article</option>
                  <option>Case Report</option>
                  <option>Thesis (for Improvements)</option>
                </select>
              </div>
            </div>

            <div className="row gap-0 d-flex">
              <div className="col-auto col-xl-6 col-lg-6  col-md-6 col-sm-10">
                   <label>
                  Classifications <sup>(optional)</sup>
                </label>
                <select className="form-control form-control-lg">
                  <option>Biological Sciences</option>
                  <option>Social Sciences</option>
                  <option>Material Sciences</option>
                </select>
              </div>
              <div className="col-auto col-xl-6 col-lg-6  col-md-6 col-sm-10">
                <label>
                  Suggest Classification
                  <span>
                    {" "}
                    [if Classification is not found in the above list]
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your classification"
                />
              </div>
            </div>
            <div className="row gap-0 d-flex">
              <div className="col-auto col-xl-8 col-lg-8 col-sm-10">
                <label>Key Word </label>
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Enter related keywords"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-auto col-lg-3 ">
                <label>
                  Manuscript<sup>*</sup>
                </label>
                  <input type="file" className="form-control form-control-lg" value="" required/>
              </div>
              <div className="col-auto col-lg-3">
                <label>
                  Additional <sup>(Files)</sup>
                </label>
                <input type="file" className="form-control form-control-lg" value="" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-auto">
                <div className="alert alert-success" role="alert">
                Thank you! Your manuscript has been submitted successfully.
                </div>
                {/* <div className="alert alert-danger" role="alert">
                Error: Please fill in all required fields.
                </div> */}
              </div>
            </div>

            <div className="row">
              <div className="col-auto col-xl-8 col-lg-6 col-md-6 col-sm-10 justify-items-center">
                <Button type="submit" variant="warning " className="rounded btn-sm mx-3 ">Submit Manuscript</Button>
                <Button type="reset" className="rounded btn-sm mx-3" variant="warning ">Clear Form</Button>
              </div>
            </div>
          </from>
        </div>
        <br />
        <br />

        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Contact US For More
        </Button>
        <div style={{ minHeight: "150px" }}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <body className="container-fluid">
                {/* Contact Details Section */}
                <div className="contact-form my-5 ">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 p-3">
                        <h4 className="">Contact Information:</h4>
                        <div className="address border-0 border-bottom mt-4 ">
                          <h6>
                            <FontAwesomeIcon
                              className="icon fs-5 mx-2 fw-bold text-secondary"
                              icon={faHospital}
                            />
                            Quds Publication House
                          </h6>
                          
                        </div>
                        <div className="address border-0 border-bottom my-1">
                          <h5>
                            <FontAwesomeIcon
                              className="icon fs-5 mx-2 fw-bold text-secondary"
                              icon={faPhone}
                            />
                            +92 3189050346
                          </h5>
                          <p className="mx-5 text-secondary">24/7 hours</p>
                        </div>
                        <div className="address border-0 border-bottom">
                          <h5>
                            <FontAwesomeIcon
                              className="icon fs-5 mx-2 fw-bold text-secondary"
                              icon={faEnvelope}
                            />
                            For Inquiry:
                          </h5>
                          <p className="mx-5 text-secondary">
                            info@qudspub.com
                          </p>
                        </div>
                        <div className="address border-0 border-bottom">
                          <h5>
                            <FontAwesomeIcon
                              className="icon fs-5 mx-2 fw-bold text-secondary"
                              icon={faGlobeAsia}
                            />
                            qudspublisher@gmail.com
                          </h5>

                          <p className="mx-5 text-secondary">
                            Send us your query anytime!
                          </p>
                        </div>
                      </div>
                      {/* contact form section */}
                      <div className="col-md-6 p-3">
                        <h4 className="">Get in Touch</h4>
                        <div className="input-group mt-4">
                          <input
                            className="form-control border-0 border-bottom me-3"
                            placeholder="Your Name *"
                            type="text"
                          />
                          <input
                            className="form-control border-0 border-bottom me-3"
                            placeholder="Email *"
                            type="text"
                          />
                        </div>
                        <div className="input-group my-4">
                          <input
                            className="form-control border-0 border-bottom me-3"
                            placeholder="phone *"
                            type="text"
                          />
                          <input
                            className="form-control border-0 border-bottom me-3"
                            placeholder="Subject"
                            type="text"
                          />
                        </div>

                        <div className="input-group my-4">
                          <textarea
                            className="form-control"
                            placeholder="Massage *"
                            name=""
                            id=""
                            style={{ height: "150px" }}
                          ></textarea>
                        </div>

                        <div className="text-center">
                          <button className="btn btn-danger fw-bold">
                            Send Us
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </body>
            </div>
          </Collapse>
        </div>
      </div>
      <br />
    </>
  );
};
