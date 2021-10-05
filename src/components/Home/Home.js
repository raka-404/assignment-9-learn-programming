import React from 'react';
import { Container } from 'react-bootstrap';
import SubHome from '../SubHome/SubHome';
import SubHomeTwo from '../SubHomeTwo/SubHomeTwo';

const Home = () => {
    return (
       <Container>
           
            <>
      
      <SubHome></SubHome>
      <SubHomeTwo></SubHomeTwo>
  
      </>
       </Container>
    );
};

export default Home;