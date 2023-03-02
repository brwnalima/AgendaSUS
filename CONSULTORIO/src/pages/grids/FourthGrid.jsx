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
                                    <h3>Quase todos os planos de saúde são aceitos</h3>
                                    <p>
                                        Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto.
                                        Basta clicar em "Editar texto" ou clicar duas vezes sobre mim.
                                        Você também pode alterar a fonte e mais.
                                        Sou um ótimo lugar para você compartilhar a sua história.
                                    </p>
                                    <div className="fourthgrid-btn">
                                        <Btn frase='Baixar formulário do paciente'/>
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