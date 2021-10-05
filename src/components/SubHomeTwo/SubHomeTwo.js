import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './SubHomeTwo.css'
const SubHomeTwo = () => {
    return (
        <div className="text-center">
            <h1>How to Learn Programming</h1>
            <Container>
            <Row xs={1} md={2} className="g-4">
                        <Col>
                        <div className="carD">
                            <Card.Body>
                            <Card.Title>Beginners level</Card.Title>
                            <Card.Text>
                            The first step to learning programming is to identify the programming language you’d want to learn.
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Col>
                        <Col>
                        <div className="carD">
                            <Card.Body>
                            <Card.Title>Basic level</Card.Title>
                            <Card.Text>
                            This step involves deciding which platform you are most interested in developing an application for. I have enlisted below the programming languages that I suggest you go for when choosing one:
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Col>
                        <Col>
                        <div className="carD">
                            <Card.Body>
                            <Card.Title>Enter mediate level </Card.Title>
                            <Card.Text>
                            Because of this I think that it is well worth taking the time to learn some programming basics before you even start learning the ins and outs of a programming language and writing your first line of code. 
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Col>
                        <Col>
                        <div className="carD">
                            <Card.Body>
                            <Card.Title>Professional training</Card.Title>
                            <Card.Text>
                            portfolio projects that showcase your new skills to help land your dream job
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SubHomeTwo;