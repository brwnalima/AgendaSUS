import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css'
import Btn from '../../components/button/Btn';
import { Zoom } from "react-awesome-reveal";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Home() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Container fluid className="full-width-container" id='home'>

      <Row className='container-row'>
        <Col sm={7} className='col-itself c1'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.consultare.com.br/wp-content/uploads/2022/08/Imagem-11.png"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://blog.leucotron.com.br/wp-content/uploads/2018/08/original-d471b5895b03ae7a21d6b1e59fcd4790.jpg"
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/home4.jpg"
                alt="Third slide"
              />
            </Carousel.Item>

          </Carousel>
        </Col>
        <Col sm={5} className='col-itself c2'>
          <div className="c2-text">
            <span>Saúde acessível para todos</span>
            <h1>Dra. Alice Sá</h1>
            <h4>Serviços médicos online</h4>
          </div>
          <Zoom>
            <div className='c2-btn'><Btn frase="Saiba Mais" /></div>
          </Zoom>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;