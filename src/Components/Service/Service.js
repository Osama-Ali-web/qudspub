import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "react-bootstrap-icons";
import "./Service.css";
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
                        <h1 className="fs-1 mt-5 fw-bold" style={{color:'#ffeb05', fontFamily:'fantasy'}}>Our Services</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>

{/* ------------------------------------------------------ */}

{/* <!-- ======= Services Section ======= --> */}
     <section id="services" className="services">
    <div className="container-fluid" data-aos="fade-up" style={{backgroundColor: 'rgb(210, 221, 241)'}}>
<div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>
{/* ------------------ Service Card layout Start --------------------- */}
<div className="card-group justify-content-center pt-5 p-5 bg-black">
  <div className="col">
    <div className="card"> 
    <div className="icon"><i className="fa fas-dribbble"></i></div>
      <img src="../../img/download.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text bin to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{/* ------------------------------------------------------------ */}

{/* -------------------------- Second Group Services --------------------------------- */}
<div className="card-group bg-black p-5">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

</div>
    </section>
    {/* <!-- End Services Section --> */}

<hr className='divider' />
    {/* ------------------- Slider Clients Logo------------------- */}

    <div className="container-fluid p-5 g-2 bg-black">
    <h1 style={{color:'goldenrod'}} className='text-center'>Our Trusted Clients</h1>
    <Carousel showDots={true} responsive={responsive} transition="slide 3s">
      {logo}
    </Carousel>
    </div>
    {/* ------------------- End Slider Clients Logo ---------------- */}
    </>
  );
};






