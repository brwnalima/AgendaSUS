import './Pages.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css'
import Btn from '../../components/button/Btn';
import { Fade } from "react-awesome-reveal";

function FourthGrid() {
    return (
        <Container fluid className='sobre-full-content fourthgrid-fullcontent' id='seguros'>
            <Fade cascade duration={4000} damping={0.1}>
                <Row>
                    <Col className='col-itself-sobre'>
                        <div className="segundo fourthgrid-content">
                            <h4 className='sobre-h4'>Seguros</h4>
                            <div className="sobre-container fourthgrid-textcontent">
                                <div className="sobre-container-item cont2 sobre-dois cont2-img">
                                    <img className='fourthgrid-img' src="./assets/fourthgridUm.webp" alt="" />
                                </div>
                                <div className="sobre-container-item cont2 sobre-um">
                                    <h3>Facilidade & Praticidade</h3>
                                    <p> A Agenda SUS é a forma mais prática e eficiente de garantir o atendimento médico que você precisa.
                                        Em nosso site, você pode agendar sua consulta de forma simples e personalizada, adequando a data e horário de acordo com suas necessidades. Além disso, durante o processo de agendamento, solicitamos apenas algumas informações pessoais para garantir a eficácia do atendimento.
                                    </p>

                                    <div className="fourthgrid-btn">                           
                                            <Btn frase="Agende agora" href="/#contato"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Fade>
        </Container>
    );
}

export default FourthGrid;