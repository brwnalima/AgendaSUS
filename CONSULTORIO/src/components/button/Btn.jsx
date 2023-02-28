import Button from 'react-bootstrap/Button';
import './Btn.css'

function Btn(props) {
  return (
    <>
      {' '} <Button href="#" size="lg" variant="outline-success" className='botao'>{props.frase}</Button>{' '}
    </>
  );
}

export default Btn;

