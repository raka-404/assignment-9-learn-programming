import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div>
            <div className="text-center">
            <Container>
            <Row xs={1} md={2} className="g-4">
                        <Col>
                        <div className="carD">
                            <Card.Body>
                            <Card.Title>Achievement</Card.Title>
                            <Card.Text>
                                Completed full stack web developer work is giant and good company.
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Col>
                        <Col>
                        <div className="carD">
                            <Card.Body>
                            <Card.Title>Goal</Card.Title>
                            <Card.Text>
                            Program in Full Stack Development
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Col>
                        <Col>
                        <div className="carD">
                            <Card.Body>
                            <Card.Title>Location</Card.Title>
                            <Card.Text>
                               Dhaka 1110.
                               kocukeht.

                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Col>
                </Row>
            </Container>
        </div>
</div>
    );
};
 

export default Aboutus;