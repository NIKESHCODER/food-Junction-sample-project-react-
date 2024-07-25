import React from 'react';
import Footer from './Footer';
import './Home.css';
import food1 from "./images/food1.jpg"
import food2 from "./images/food2.jpg"
import food3 from "./images/food3.jpg"
import { Card, Col, Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="home-container">
      <header className="header">
        
        
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <h1>Food Junction</h1>
          <p>A Delight of Fresh Food</p>
          
        </div>
        
      </section>
      <Container fluid>
        <Container>
          <Row className='foodlist'>
            <Col lg='3' md='6'>
            <Card style={{ width: '18rem' }}>
            <img  src={food1} />
            <Card.Body>
            <Card.Title>Medu Vada</Card.Title>
          <Card.Text>
          Medu Vada, also known simply as Vada, is a traditional South Indian savory snack that is popular across India and globally among Indian cuisine lovers
            </Card.Text>
        
      </Card.Body>
    </Card>
  
            </Col >
            <Col lg='3' md='6' >
            <Card style={{ width: '18rem' }}>
            <img  src={food2} />
            <Card.Body>
            <Card.Title>Pancakes</Card.Title>
          <Card.Text>
          Pancakes are a beloved breakfast staple enjoyed around the world, known for their light, fluffy texture and versatility
            </Card.Text>
        
      </Card.Body>
    </Card>
  
            </Col>
            <Col lg='3' md='6'>
            <Card style={{ width: '18rem' }}>
            <img  src={food3} />
            <Card.Body>
            <Card.Title>Brunch Platter</Card.Title>
          <Card.Text>
          A breakfast platter, often enjoyed during a leisurely brunch, is a delightful assortment of various breakfast items served together on a single plate.
            </Card.Text>
        
      </Card.Body>
    </Card>
  
            </Col>
          </Row>
          
        </Container>
      </Container>


      <Footer />
    </div>
  );
}

