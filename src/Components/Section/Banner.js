import React, { useState } from 'react'
import { Button, Carousel } from 'react-bootstrap';


export const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <>
    <Carousel className="banner col-md-12 col-12" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
          
          className="d-block w-auto"
          src="../../img/testimonials/testimonials-1.jpg"
          alt="quds publisher"
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bolder">
          Complete Comprehensive and
          <br />
          Compassionate Cardiac Care
          </h1>
          <p className="mb-4">Our Treatments & services are provided comfortable lorem ipsum dolor sit amet.</p>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Call for Inquiry</Button>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Ask Cardiologist</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          
          className="d-block w-auto"
          src="../../img/testimonials/testimonials-2.jpg"
          alt="quds publisher"
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bolder">We’ve got your heart covered</h1>
          <p className="mb-4">Our Treatments & services are provided comfortable lorem ipsum dolor sit amet.</p>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Call for Inquiry</Button>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Ask Cardiologist</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          
          className="d-block w-auto"
          src="../../img/testimonials/testimonials-3.jpg"
          alt="quds publisher"
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bolder">
          Efficient Affordable High
          <br />
          Quality Heart Care
          </h1>
          <p className="mb-4">Our Treatments & services are provided comfortable lorem ipsum dolor sit amet.</p>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Call for Inquiry</Button>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Ask Cardiologist</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          
          className="d-block w-auto"
          src="../../img/testimonials/testimonials-3.jpg"
          alt="quds publisher"
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bolder">
          Efficient Affordable High
          <br />
          Quality Heart Care
          </h1>
          <p className="mb-4">Our Treatments & services are provided comfortable lorem ipsum dolor sit amet.</p>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Call for Inquiry</Button>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Ask Cardiologist</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          
          className="d-block w-auto"
          src="../../img/testimonials/testimonials-3.jpg"
          alt="quds publisher"
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bolder">
          Efficient Affordable High
          <br />
          Quality Heart Care
          </h1>
          <p className="mb-4">Our Treatments & services are provided comfortable lorem ipsum dolor sit amet.</p>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Call for Inquiry</Button>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Ask Cardiologist</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          
          className="d-block w-auto"
          src="../../img/testimonials/testimonials-3.jpg"
          alt="quds publisher"
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bolder">
          Efficient Affordable High
          <br />
          Quality Heart Care
          </h1>
          <p className="mb-4">Our Treatments & services are provided comfortable lorem ipsum dolor sit amet.</p>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Call for Inquiry</Button>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Ask Cardiologist</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>



  )
}
