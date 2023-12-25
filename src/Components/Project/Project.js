import React from 'react'
import '../../index.css'
import {Row, Col} from 'react-bootstrap';

export const Project = () => {
  return (
    <>
    <div className="inner-banner img-bg">
        <div className="overlay">
            <div className="container py-3">
                <Row className="text-center">
                    <Col className="py-4">
                        <h1 className="fs-1 mt-5 fw-bold" style={{color:'#ffeb05', fontFamily:'fantasy'}}>Projects</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    


    </>
  )
}

