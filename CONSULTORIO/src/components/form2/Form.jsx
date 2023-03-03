import Container from 'react-bootstrap/Container';
import Form2 from './Form2';
import Grid from "./Grid"
import { useEffect, useState } from "react";
import styled from "styled-components"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import './Form.css'

const Container1 = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;`

const Title = styled.h2``;

const Form = () => {
  const [pacientes, setPacientes] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getPacientes = async () => {
    try {
      const res = await axios.get("http://localhost:5000");
      setPacientes(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPacientes();
  }, [setPacientes]);
  return (
    <div className='form-container'>
      <Container className='form-content'>
        <Title>Pacientes cadastrados</Title>
        <Form2 onEdit={onEdit} setOnEdit={setOnEdit} getPacientes={getPacientes} />
        <Grid setOnEdit={setOnEdit} pacientes={pacientes} setPacientes={setPacientes} className='form-grid' />
      </Container>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </div>
  )
}

export default Form