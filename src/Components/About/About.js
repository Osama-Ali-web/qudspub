import React from "react";
import '../../index.css';
import "./About.css";
import {Row, Col} from 'react-bootstrap';

export const About = () => {
  return (
    <>
    {/* Page Title */}
    <div className="inner-banner img-bg">
        <div className="overlay">
            <div className="container py-3">
                <Row className="text-center">
                    <Col className="py-4">
                        <h1 className="fs-1 mt-5 fw-bold" style={{color:'#ffeb05', fontFamily:'fantasy'}}>About Us</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    {/* <----------------------------------------> */}

    {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">

      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <h1 style={{color:'yellowgreen'}}>Quds Publisher<span>'s</span></h1>
          <h2><div>We excel at guiding researchers towards successful publication in prestigious journals. With our expertise in various indexing systems (Elsvair, Frontiers, Scopus, WOS) and recognition from esteemed bodies (HJRS, UGC, JCR), we ensure your work receives the visibility and recognition it deserves.</div></h2>
        </div>
      </div>

      <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-facebook"></i>
            <h3>
              <a href="https://web.facebook.com/profile.php?id=100091503754228">facebook</a></h3>
            
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-whatsapp"></i>
            <h3>
              <a href="http://wa.me/+923189050346">whatsapp</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-instagram"></i>
            <h3>
              <a href="https://instagram.com/qudspublisher?igshid=MzNlNGNkZWQ4Mg==">instagram</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-linkedin"></i>
            <h3>
              <a href="https://www.linkedin.com/in/quds-publisher-8885b8277/">linkedin</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-twitter"></i>
            <h3>
              <a href="https://twitter.com/QudsPublisher">twitter</a></h3>
            
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-envelope-open"></i>
            <h3>
              <a href="qudspublisher@gmail.com">Gmail</a></h3>
          </div>
        </div>
      </div>

    </div>
  </section>
   {/* End Hero  */}

   <br/>
     <div className="aboutus text-white"  style={{borderTop:'2px solid red'}}>
      {/* About Section  */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img src="../../img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h3>Maximize your chances of getting published.</h3>
              <p className="fst-italic">
                Are you tired of receiving constant rejections from journals and
                paying high APC (article processing charges)? Are you struggling
                to get your research noticed and published in high-impact
                journals? Look no further! We are here to help maximize your
                chances of getting published. Our publication service provides a
                tailored approach to publishing, ensuring that your research is
                seen by the right audience and in the right journals. With our
                years of experience in the publishing industry, we have the
                expertise to help you craft a compelling manuscript and navigate
                the complex submission process. Our team of experts is dedicated
                to providing personalized support, giving your research the best
                chance of success. Don't let your hard work go unnoticed; choose
                our publication service and take the first step towards
                achieving your publishing goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
<div className='' style={{borderTop:'2px solid red'}}></div>
      <br />
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h3 className="title-left text-uppercase">About me</h3>
                    </div>
                    <p className="lead" style={{ textAlign: "justify" }}>
                      I've been trying to learn programming for 2 years, at this
                      time Looking back in my past, I can't find any other
                      chapter except coding
                    </p>
                    <p className="lead" style={{ textAlign: "justify" }}>
                      I have become so involved with programming that coding has
                      become an addiction. That's why when I finish a project at
                      the right time, then I feel full of peace, joy, and a
                      smile to
                    </p>
                    <p className="lead" style={{ textAlign: "justify" }}>
                      Finally,Dedicated and efficient full stack developer with
                      8+ months of experience in application layers,
                      presentation layers, and databases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}


