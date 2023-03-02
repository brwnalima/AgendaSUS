import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Pages.css'
import Btn from '../../components/button/Btn';
import { Zoom } from "react-awesome-reveal";

function FifthGrid() {
    return (
        <Container fluid className="full-width-container content-5grid" id='contato'>

            <Row className='container-row'>
                <Col sm={5} className='col-itself c1 c1-5grid'>
                    <div className="c1-5grid-text">
                        <h3>Horário de funcionamento</h3>
                        <p>Segunda-feira à sexta-feira: 9:00 às 19:00</p>
                        <p>Sábado: 9:00 às 16:00</p>
                        <p>Domingo: Fechado</p>
                    </div>
                </Col>
                
                <Col sm={7} className='col-itself c2 c2-5grid'>
                    <div className="c2-5grid-text">
                        <h4>Tem dúvidas?</h4>
                        <p>Deixe uma mensagem!</p>
                    </div>


                    <Form className='form-5grid'>

                        <Zoom>
                            <Row className="mb-3">
                                <Form.Group as={Col} className='form-5grid-nome' controlId="formGridNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control className='form-control-5grid' type="nome" placeholder="Digite seu nome" />
                                </Form.Group>
                                <Form.Group as={Col} className='form-5grid-sobrenome' controlId="formGridSobrenome">
                                    <Form.Label>Sobrenome</Form.Label>
                                    <Form.Control className='form-control-5grid' type="sobrenome" placeholder="Digite sua senha" />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className='form-control-5grid' type="email" placeholder="bruna@gmail.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Insira sua mensagem</Form.Label>
                                <Form.Control className='form-control-5grid' as="textarea" rows={3} />
                            </Form.Group>
                        </Zoom>

                        <Zoom>
                            <div className='c2-btn btn-5grid'><Btn frase="Enviar" /></div>
                        </Zoom>
                    </Form>

                    <div className="footer-5grid">
                        <p>Política de Cookies</p>

                        <p>Termos e Condições</p>

                        <p id='pp-5grid'>Política de Privacidade</p>

                        <p>© 2023 por Tech Solution Ltda</p>
                        <p>Orgulhosamente criado para o módulo 6</p>
                    </div>


                </Col>
            </Row>
        </Container>
    );
}

export default FifthGrid;