import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form2 = ({ getPacientes, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const paciente = ref.current;

      paciente.nome.value = onEdit.nome;
      paciente.cpf.value = onEdit.cpf;
      paciente.telefone.value = onEdit.telefone;
      paciente.email.value = onEdit.email;
      paciente.data_nasc.value = onEdit.data_nasc;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paciente = ref.current;

    if (
      !paciente.nome.value ||
      !paciente.cpf.value ||
      !paciente.telefone.value ||
      !paciente.email.value ||
      !paciente.data_nasc.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:5000/" + onEdit.id, {
          nome: paciente.nome.value,
          cpf: paciente.cpf.value,
          telefone: paciente.telefone.value,
          email: paciente.email.value,
          data_nasc: paciente.data_nasc.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:5000", {
          nome: paciente.nome.value,
          cpf: paciente.cpf.value,
          telefone: paciente.telefone.value,
          email: paciente.email.value,
          data_nasc: paciente.data_nasc.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    paciente.nome.value = "";
    paciente.cpf.value = "";
    paciente.telefone.value = "";
    paciente.email.value = "";
    paciente.data_nasc.value = "";

    setOnEdit(null);
    getPacientes();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" />
      </InputArea>
      <InputArea>
        <Label>Email</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nasc" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form2;