import React from 'react'
import "./PopularStyles.css"
import { Col, Container, Row } from 'react-bootstrap'

export default function PopularStyles() {
    return (
        <Container className="py-5">
            <div className="DJ-text py-5">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>
            
            <Row className='py-5'>

                {/* left side  */}
                <Col md={6} className='d-flex gap-3 mb-5'>
                    <div className="DJ-styleImage">
                        <img className='img-fluid' src="./assets/images/Article/Popular styles in 2022/image 1.png" alt="Popular style image" />
                    </div>
                    <div className="DJ-styleImage">
                        <img className='img-fluid' src="./assets/images/Article/Popular styles in 2022/image 2.png" alt="Popular style image" />
                    </div>
                </Col>

                {/* right side  */}
                <Col md={6}>
                    <h2>Popular styles in 2022</h2>
                    <p>Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you. Nostrum exercitationem ullam corporis suscipit. ui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                </Col>

            </Row>

        </Container>
    )
}
