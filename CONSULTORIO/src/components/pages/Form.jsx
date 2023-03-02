import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css'
import Btn from '../button/Btn';
import Form2 from "../form2/Form2"
import Grid from "../grid/Grid"
import { useEffect, useState } from "react";
import styled from "styled-components"
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

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
    <>
    <Container>
        <Title>Pacientes</Title>
        <Form2 onEdit={onEdit} setOnEdit={setOnEdit} getPacientes={getPacientes}/>
        <Grid setOnEdit={setOnEdit} pacientes={pacientes} setPacientes={setPacientes} />
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
    </>
  )
}

export default Form