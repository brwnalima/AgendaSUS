import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css'
import { Fade } from "react-awesome-reveal";


function Sobre() {
    return (

        <Container fluid className='sobre-full-content'>
            <Fade cascade duration={4000} damping={0.1}>
                <Row>
                    <Col className='col-itself-sobre'>
                        <div className='primeiro'>
                            <h4 className='sobre-h4'>Sobre</h4>
                            <div className="sobre-container">
                                <div className="sobre-container-item sobre-um">
                                    <h2>Sobre a Dra. Alice Sá</h2>
                                    <p>Sou um parágrafo. Aqui você pode adicionar seu próprio texto.
                                        É fácil, é só clicar em "Editar texto" ou clicar duas vezes sobre mim para editar seu conteúdo e alterar a fonte.
                                        Você também pode me arrastar e soltar em qualquer lugar da página.
                                        Sou um ótimo espaço para você compartilhar a sua história.
                                    </p>
                                    <p>
                                        Use este espaço para escrever um texto longo sobre sua empresa e sobre os serviços que ela oferece.
                                        Conte aos visitantes a história de como você teve a ideia de criá-la e o que a torna diferente de seus concorrentes.
                                        Você pode apresentar a sua equipe, seus projetos e metas.
                                        Faça com que a sua empresa se destaque e mostre aos visitantes quem você é.
                                        Clique em "Editar texto" para começar.
                                    </p>
                                </div>
                                <div className="sobre-container-item sobre-dois">
                                    <img className='sobre-img' src="https://mediflix.com.br/wp-content/uploads/2020/03/7781-scaled-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="segundo">
                            <div className="sobre-container">
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
                        </div>
                    </Col>
                </Row>
            </Fade>
        </Container>

    );
}

export default Sobre;