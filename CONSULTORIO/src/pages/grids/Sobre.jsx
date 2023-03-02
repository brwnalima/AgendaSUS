import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css'
import { Fade } from "react-awesome-reveal";


function Sobre() {
    return (

        <Container fluid className='sobre-full-content' id="sobre">
            <Fade cascade duration={4000} damping={0.1}>
                <Row>
                    <Col className='col-itself-sobre'>
                        <div className='primeiro'>
                            <h4 className='sobre-h4'>Sobre</h4>
                            <div className="sobre-container">
                                <div className="sobre-container-item sobre-um">
                                    <h2>Sobre a Dra. Alice Sá</h2>
                                    <p>Nossa clínica médica pública oferece atendimento completo e acessível para toda a população do país.
                                        Desde consultas médicas simples até transplante de órgãos, nosso objetivo é garantir que todos tenham acesso gratuito e integral aos cuidados de saúde que precisam.
                                    </p>
                                    <p>
                                        Com uma equipe de enfermeiros e médicos altamente capacitados, estamos prontos para atender suas necessidades de saúde, com exames e cirurgias quando necessário.
                                        Nosso atendimento é universal e sem discriminação, independentemente de quem você é ou de onde vem.
                                    </p>
                                </div>
                                <div className="sobre-container-item sobre-dois">
                                    <img className='sobre-img' src="https://medicinasa.com.br/wp-content/uploads/2021/03/medicos-networking-medica2.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="segundo">
                            <div className="sobre-container">
                                <div className="sobre-container-item cont2 sobre-um hided">
                                    <h2>Estamos prontos para cuidar de você</h2>
                                    <p>
                                        Acreditamos que todos têm direito à saúde de qualidade, e é por isso que oferecemos acesso universal à saúde pública, garantindo que você possa cuidar da sua saúde sem preocupações financeiras.
                                    </p>
                                </div>
                                <div className="sobre-container-item cont2 sobre-dois cont2-img">
                                    <img className='C2-sobre-img' src="./assets/est.jpg" alt="" />
                                </div>
                                <div className="sobre-container-item cont2 sobre-um show">
                                    <h2>Estamos prontos para cuidar de você</h2>
                                    <p>
                                        Na nossa clínica, a sua saúde é a nossa prioridade. Venha nos visitar e descubra como podemos ajudar a melhorar a sua qualidade de vida. Garantimos um atendimento humanizado e de qualidade, para que você possa cuidar da sua saúde com tranquilidade.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Fade>
        </Container>

    );
}

export default Sobre;