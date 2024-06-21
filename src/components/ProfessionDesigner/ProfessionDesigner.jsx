import React from 'react'
import "./professionDesigner.css"
import { Col, Container, Row } from 'react-bootstrap'

export default function ProfessionDesigner() {
    return (
        <Container className='py-5'>
            <Row className='py-5 DJ-title'>

                {/* left side  */}
                <Col md={6} className='mb-3'>
                    <h2>Profession UI/UX designer</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                </Col>

                {/* right side  */}
                <Col md={6} className='d-flex justify-content-around gap-1 mb-3'>
                    <div className='DJ-positionDetails'>
                        <div className='DJ-detailTitle'>
                            <h2>5 000 $</h2>
                            <span>Salary</span>
                        </div>
                        <p>Nam libero tempore, cum soluta nobis est</p>
                    </div>

                    <div className='DJ-positionDetails'>
                        <div className='DJ-detailTitle'>
                            <h2>4 225</h2>
                            <span>Vacancies</span>
                        </div>
                        <p>Vero eos et accusamus</p>
                    </div>
                </Col>
            </Row>

            {/* cards  */}
            <Row className='justify-content-center py-5'>
                <Col lg={4} md={6} className='mb-3'>
                <div className='DJ-cardItem DJ-blue px-4 py-5'>
                    <h3>Portfolio</h3>
                    <p>You will learn how to create a brand identity on the web and for printing. Learn how to work in Illustrator, Photoshop, InDesign and Figma</p>
                </div>
                </Col>

                <Col lg={4} md={6} className='mb-3'>
                <div className='DJ-cardItem DJ-yellow px-4 py-5'>
                    <h3>Internship</h3>
                    <p>You will learn how to create a brand identity on the web and for printing. Learn how to work in Illustrator, Photoshop, InDesign and Figma</p>
                </div>
                </Col>

                <Col lg={4} md={6} className='mb-3'>
                <div className='DJ-cardItem DJ-purple px-4 py-5'>
                    <h3>Certificate</h3>
                    <p>You will learn how to create a brand identity on the web and for printing. Learn how to work in Illustrator, Photoshop, InDesign and Figma</p>
                </div>
                </Col>
            </Row>

            {/* <div className='d-flex flex-wrap justify-content-center gap-3 py-5'>
                <div className='DJ-cardItem'>
                    <h3>Portfolio</h3>
                    <p>You will learn how to create a brand identity on the web and for printing. Learn how to work in Illustrator, Photoshop, InDesign and Figma</p>
                </div>

                <div className='DJ-cardItem'>
                    <h3>Internship</h3>
                    <p>You will learn how to create a brand identity on the web and for printing. Learn how to work in Illustrator, Photoshop, InDesign and Figma</p>
                </div>

                <div className='DJ-cardItem'>
                    <h3>Certificate</h3>
                    <p>You will learn how to create a brand identity on the web and for printing. Learn how to work in Illustrator, Photoshop, InDesign and Figma</p>
                </div>
            </div> */}
        </Container>
    )
}
