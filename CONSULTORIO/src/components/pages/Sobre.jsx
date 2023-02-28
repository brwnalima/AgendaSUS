import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css'
import Btn from '../button/Btn';


function Sobre() {
    return (
        <Container fluid>
            <Row>
                <Col>
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
                </Col>
            </Row>
        </Container>
    );
}

export default Sobre;