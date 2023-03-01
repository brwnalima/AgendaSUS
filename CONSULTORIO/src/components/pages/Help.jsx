import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Btn from '../button/Btn';
import CardItem from '../card/Card';

function Help() {
    return (
        <Container fluid className="help-full-content">
            <Row>
                <Col className='help-col'>
                    <div>
                        <h4 className='help-h4'>Como posso ajudar?</h4>
                        <div className="help-content">
                            <h1>Serviços online</h1>
                            <div className="help-cards">
                                <div className="help-card-itens">
                                    <CardItem title='1' text='Exame de Sangue'/>
                                    <CardItem title='2' text='Saúde em geral'/>
                                    <CardItem title='3' text='Saúde mental'/>
                                    <CardItem title='4' text='Preveção e bem-estar'/>
                                </div>
                            </div>
                            <Btn frase="Agenda uma consulta online" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Help;