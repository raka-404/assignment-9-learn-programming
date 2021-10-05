import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllService from '../AllService/AllService';
import './Service.css'
const Service = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('./details.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <>
        <div className="serviceBackground">
                <h1 className="text-center text-light"><span style={{fontSize:'5rem'}}>Our Courses</span></h1>
                <h6 className="text-center w-50 mx-auto text-light">The first step to learning programming is to identify the programming language you’d want to learn.</h6>
            </div>
        <Container>
            
            <Row xs={1} md={3} className="g-4 pb-5">
            {
                services.map(service=> <AllService key={service.id} service={service}></AllService>)
            }
            </Row>
        </Container>
        </>
    );
};

export default Service;