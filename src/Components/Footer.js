import React from "react";
import "./Nav.css";
import Logo from "../img/testimonials/favicon.png";
import { Link } from "react-router-dom";
import "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      About us
                    </div>
                    <img src={Logo} alt="Logo" width="50%" />
                    <p className="white-text">
                      We steer researchers towards top publications in
                      prestigious journals. Our indexing expertise and esteemed
                      recognitions guarantee your work's visibility and merit.
                    </p>
                  </div>
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      Our Services
                    </div>
                    <div className="footer-links">
                      <Link to="/contact">Peer Review Submission</Link>
                      <Link to="/contact">Substantive Editing Service</Link>
                      <Link to="#">Content writing</Link>
                      <Link to="#">Journal Submission Assistance</Link>
                      <Link to="/contact">Manuscript Foramting</Link>
                      <Link to="#">Editorial Contact Support</Link>
                      <Link to="#">Rejected Paper Editing</Link>
                    </div>
                  </div>
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      Quick Links
                    </div>
                    <div className="footer-links">
                      <Link to="/team">Team</Link>
                      <Link to="/events">Events</Link>
                      <Link to="/blog">Blog</Link>
                      <Link to="/collaboratives">Collaboratives</Link>
                      <Link to="/terms">Terms & conditions</Link>
                      <Link to="/privacy">Privacy policy</Link>
                      <Link to="/faqs">Frequently Asking Question</Link>
                    </div>
                  </div>
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      Support
                    </div>
                    <div className="footer-links">
                      <Link to="/contact">Contact Us</Link>
                      <Link to="/service">Services</Link>
                      <Link to="#">Databases</Link>
                      <Link to="#">Team Review</Link>
                      <Link to="#">Publish Research</Link>
                      <Link to="#">Journal Publication</Link>
                    </div>

                    <div className="footer-social-links ">
                      <li>
                        <Link to="#">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </Link>
                        <Link to="#">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </Link>
                        <Link to="#">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </Link>
                        <Link to="#">
                          <i className="bi bi-github" aria-hidden="true"></i>
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <div className="container-fluid footer-bottom">
              Designed By{" "}
              <a
                href="https://osama-ali.netlify.app/"
                target="blank"
                className="design"
              >
                Osama Ali
              </a>{" "}
              <br />
              Copyright © 2023, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
