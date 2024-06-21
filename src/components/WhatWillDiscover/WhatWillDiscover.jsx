import React from 'react'
import "./WhatWillDiscover.css"
import { Col, Container, Row } from 'react-bootstrap'

export default function WhatWillDiscover() {
  return (
    <section className='py-5 bg-light DJ-whatToDiscover'>
      <Container className='py-5'>
        <Row>

          {/* left side  */}
          <Col md={6} className='mb-5'>
            <h2>What Will You Discover?</h2>
            <p>Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you</p>
            <button>Try free</button>
          </Col>

          {/* right side  */}
          <Col md={6} className='d-flex gap-3'>
            <div className='p-3 bg-white DJ-card'>
              <img className='img-fluid' src="./assets/images/Main_page/What Will You Discover/Rectangle 98.png" alt="Photo & Film image" />
              <h6>Photo & Film</h6>
            </div>
            <div className='position-relative pe-5 DJ-withBackground'>
              <div className='p-3 bg-white position-relative'>
                <img className='img-fluid' src="./assets/images/Main_page/What Will You Discover/Rectangle 99.png" alt="UI/UX Design image" />
                <h6>UI/UX Design</h6>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}
