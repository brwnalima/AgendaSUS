import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardItem(props) {
  return (
    <>
    <Card border="success" variant="transparent" style={{ width: '18rem' }}>
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

    </>
  );
}

export default CardItem;