import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

function CardItem(props) {
  return (
    <>
      <Card style={{ width: '18rem', backgroundColor: '#235D5D', color: '#d8efed' }}>
        <Card.Body>
          <div className="card-content-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
        </Card.Body>
      </Card>
      <br />

    </>
  );
}

export default CardItem;