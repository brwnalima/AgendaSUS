import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css'
import Btn from '../button/Btn';

function Home() {
    return (
      <Container fluid className="full-width-container">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className='container-row'>
          <Col xs={12} md={8} className='col-itself c2'>
            <img src="https://global-uploads.webflow.com/5f7c5ad0f02de81be2e6417c/616daf94abf9bb66df13fb6a_residencia-clinica-medica-grande.jpg.jpg" alt="" className="full-width-img" />
          </Col>
          <Col xs={6} md={4} className='col-itself c2'>
            <div className="c2-text">
              <span>Saúde acessível para todos</span>
              <h1>Dra. Alice Sá</h1>
              <h4>Serviços médicos online</h4>
            </div>
            <div className='c2-btn'><Btn frase="Saiba Mais"/></div>
          </Col>
        </Row>
      </Container>
    );
  }

export default Home;