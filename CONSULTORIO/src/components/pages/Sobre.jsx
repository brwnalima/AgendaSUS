import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css'
import Btn from '../button/Btn';


function Sobre() {
    return (
        <Container fluid>
            <Row>
                <Col className='col-itself-sobre'>
                    <h4 className='sobre-h4'>Sobre</h4>
                    <div className="sobre-container">
                        <div className="sobre-container-item sobre-um">
                            <h2>Sobre a Agenda SUS</h2>
                            <p> Somos uma clínica médica pública, proporcionamos desde o simples
                                atendimento para avaliação médica até o transplante de órgão, garantimos à você o 
                                acesso totalmente gratuito a todo e qualquer tratamento que necessite, consultas com 
                                enfermeiro(a) ou médico(a), exames e até mesmo operações. Além disso, o acesso é 
                                universal e atendemos toda a população brasileira, sem discriminações.
                            </p>

                            <p>
                            Acreditamos que você tem o direito de cuidar da sua saúde sem se preocupar se poderá pagar 
                            todo o custo de um tratamento, por exemplo. Com o acesso universal à saúde pública nós 
                            garantimos que a sua qualidade de vida seja melhor sem que precise se preocupar com valores!
                            </p>
                        </div>
                        <div className="sobre-container-item sobre-dois">
                            <img className='sobre-img' src="https://mediflix.com.br/wp-content/uploads/2020/03/7781-scaled-1.jpg" alt="" />
                        </div>
                    </div>

                    <div className="sobre-container segundo">

                    <div className="sobre-container-item cont2 sobre-um hided">
                            <h2>Formação:</h2>
                            <ul className="lista-formacao">
                                <li className="lista-itens">Sou um item. ​Clique aqui para me editar.</li>
                                <li className="lista-itens">Sou um item. ​Clique aqui para me editar.</li>
                                <li className="lista-itens">Sou um item. ​Clique aqui para me editar.</li>
                                <li className="lista-itens">Sou um item. ​Clique aqui para me editar.</li>
                            </ul>
                        </div>

                        <div className="sobre-container-item cont2 sobre-dois cont2-img">
                            <img className='C2-sobre-img' src="https://d2dxldo5hhj2zu.cloudfront.net/img/674x,jpeg/https://d3043uog1ad1l6.cloudfront.net/uploads/2021/06/pos-graduacao.jpg" alt="" />
                        </div>

                        <div className="sobre-container-item cont2 sobre-um show">
                            <h2>Formação:</h2>
                            <ul className="lista-formacao">
                                <li className="lista-itens">Sou um item. ​Clique aqui para me editar.</li>
                                <li className="lista-itens">Sou um item. ​Clique aqui para me editar.</li>
                                <li className="lista-itens">Sou um item. ​Clique aqui para me editar.</li>
                                <li className="lista-itens">Sou um item. ​Clique aqui para me editar.</li>
                            </ul>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Sobre;