import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "react-bootstrap-icons";
import "./Service.css";
import "../../index.css";
import CarouselLogo from "./CarouselLogo";
import { imageData,  responsive } from "./data";
import { Row, Col } from 'react-bootstrap';
// import { Servcard } from '../Section/Servcard';

export const Service = () => {

  const logo = imageData.map((item) => (
    <CarouselLogo
      // id = {i.id}
      url={item.imageurl}
 
      />
  ));
  return (
    <>
    {/* Header Layout Page Title */}
   
    <div className="inner-banner img-bg">
        <div className="overlay">
            <div className="container py-3">
                <Row className="text-center">
                    <Col className="py-4">
                        <h1 className="fs-1 mt-5 fw-bold title" id="title" >Our Services</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>

{/* ------------------------------------------------------ */}

{/* <!-- ======= Services Section ======= --> */}
     <section id="services" className="services" >
    <div className="container-fluid" data-aos="fade-up" >
{/* ------------------ Service Card layout Start --------------------- */}
<div className="card-group pt-2">
  <div className="col">
    <div className="card border-warning mb-3">
      <img src="../../img/hero-bgau.jpg" className="img" alt="..." />
      <div className="card-body">
        <h5 className="card-title" id="title">Peer Review Submission</h5>
        <p className="card-text">Elevate your research to new heights with our peer review submission service, where our team of experts provide insightful feedback, rigorous evaluation, and unparalleled support to help your work stand out in the competitive academic landscape   </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="../../img/features.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" id="title">Substantive Editing Service</h5>
        <p className="card-text">Transform your writing into a masterpiece with our substantive editing service, where our skilled editors delve deep into your work, refining your ideas, enhancing your language, and elevating your message to captivate and engage your readers like never before   </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="../../img/back.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" id="title">Content writing</h5>
<p className="card-text">Unleash the power of research with our top-notch research writing services, where our team of experts provide in-depth analysis, insightful perspectives, and exceptional writing skills to help you make breakthrough discoveries, establish your authority, and advance your academic or professional career   </p>
      </div>
    </div>
  </div>
</div>
{/* ------------------------------------------------------------ */}

{/* -------------------------- Second Group Services --------------------------------- */}
<div className="card-group justify-content-center pt-2">
  <div className="col">
    <div className="card"> 
    <div className="icon"><i className="fa fas-dribbble"></i></div>
      <img src="../../img/download.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" id="title">Journal Submission Assistance</h5>
        <p className="card-text">Unlock the doors to top-tier journals with our expert journal submission assistance services, where our team of experienced professionals provide comprehensive support, strategic guidance, and meticulous attention to detail to help you navigate the submission process with confidence and ease   </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="../../img/features.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" id="title">Manuscript Foramting</h5>
        <p className="card-text">Manuscript Formatting and Artwork Editing provides researchers a manuscript fine-tuning service that fixes every flaw in a manuscript which helps your research for effortless journal submission.   </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="../../img/features.jpg" className="img" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-warning">Editorial Contact Support</h5>
<p className="card-text">We offer a collaborative process that includes support from editorial team for both and pre and post submission. Trust us to handle your manuscript submission and increase your acceptance odds by 30%.   </p>
      </div>
    </div>
  </div>
</div>

</div>
    </section>
    {/* <!-- End Services Section --> */}

<hr className='divider' />
    {/* ------------------- Slider Clients Logo------------------- */}

    <div className="container-fluid p-5 g-2 ">
    <h1 style={{color:'goldenrod'}} className='text-center'>Our Trusted Clients</h1>
    <Carousel showDots={true} responsive={responsive} transition="slide 3s">
      {logo}
    </Carousel>
    </div>
    {/* ------------------- End Slider Clients Logo ---------------- */}
    </>
  );
};






