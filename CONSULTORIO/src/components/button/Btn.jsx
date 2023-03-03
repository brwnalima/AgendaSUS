import Button from 'react-bootstrap/Button';
import './Btn.css'

function Btn(props) {
  
  return (
    <>
      {' '} <Button href={props.href} variant="outline-success" className='botao'>{props.frase}</Button>{' '}
    </>
  );
}

export default Btn;

