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
        <Col sm={8} className='col-itself c1'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.anchieta.es.gov.br/uploads/files/fotos-noticias/atendimento-medico.jpg"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.tribunapr.com.br/wp-content/uploads/2021/07/22120746/Os-brasileiros-tem-a-opcao-para-escapar-dos-reajustes-dos-planos-de-saude-e-ainda-garantir-atendimento-medico-de-qualidade-por-um-preco-acessivel.-970x550.jpg"
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://blanchospital.com.br/blog/wp-content/uploads/2019/02/blanc-01.jpg"
                alt="Third slide"
              />
            </Carousel.Item>

          </Carousel>
        </Col>
        <Col sm={4} className='col-itself c2'>
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