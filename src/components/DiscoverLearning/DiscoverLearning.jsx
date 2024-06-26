import React from 'react'
import "./DiscoverLearning.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export default function DiscoverLearning() {

    // cards array 
    const learningCards = [
        {
            image: "./assets/images/Main_page/Discover Lifelong Learning/image Animation.png",
            title: "Sales Marketing",
            text: "6 months",
        },
        {
            image: "./assets/images/Main_page/Discover Lifelong Learning/Image data analytics.png",
            title: "Data analytics",
            text: "9 months",
        },
        {
            image: "./assets/images/Main_page/Discover Lifelong Learning/Image design art.png",
            title: "Design art",
            text: "4 months",
        },
        {
            image: "./assets/images/Main_page/Discover Lifelong Learning/image Sales marketing.png",
            title: "Animation",
            text: "8 months",
        }
    ]

    return (
        <div className='py-5 DJ-discover'>
            <h2>Discover Lifelong Learning</h2>
            <Navbar expand="lg DJ-discoverNav">
                <Nav className="DJ-nav me-auto gap-3">
                    <Nav.Link href="#home" className='DJ-active'>Popular</Nav.Link>
                    <Nav.Link className='DJ-navItem' href="#link">Animation</Nav.Link>
                    <Nav.Link className='DJ-navItem' href="#link">Design</Nav.Link>
                    <Nav.Link className='DJ-navItem' href="#link">Illustration</Nav.Link>
                    <Nav.Link className='DJ-navItem' href="#link">Programming</Nav.Link>
                    <Nav.Link className='DJ-navItem' href="#link">Photo & Film</Nav.Link>
                    <Nav.Link className='DJ-navItem' href="#link">Marketing</Nav.Link>
                </Nav>
                <Nav.Link href="#link" className='DJ-more'>See more 
                    <img className='DJ-icon-right' src="./assets/images/Main_page/Discover Lifelong Learning/arrow-right.svg" alt="" />
                </Nav.Link>
            </Navbar>

            {/* adding cards  */}
            <Row className='my-5'>
                {learningCards.map((learningCard, index) => {
                    return (
                        <Col key={index} md="6" lg="3" className='d-flex justify-content-center mb-3'>
                            <div className='DJ-card'>
                                <img src={learningCard.image} alt="Course image" className='img-fluid' />
                                <h5>{learningCard.title}</h5>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-secondary'>{learningCard.text}</p>
                                    <a href="#">
                                        <img className='DJ-icon-up' src="./assets/images/Main_page/Discover Lifelong Learning/arrow-up-right.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
