import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import './Form.css'

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`

`;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding: 10px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ pacientes, setPacientes, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:5000/" + id)
      .then(({ data }) => {
        const newArray = pacientes.filter((paciente) => paciente.id !== id);

        setPacientes(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };
  const handleUpdate = async (id, updatedInfo) => {
    await axios
      .put("http://localhost:5000/" + id, updatedInfo)
      .then(({ data }) => {
        const newArray = pacientes.map((paciente) => {
          if (paciente.id === id) {
            return { ...paciente, ...updatedInfo };
          }
          return paciente;
        });

        setPacientes(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table className="grid-content">
      <Thead className="grid-thead">
        <Tr className="grid-tr">
          <Th className="grid-th">Nome</Th>
          <Th className="grid-th">CPF</Th>
          <Th className="grid-th" onlyWeb>Telefone</Th>
          <Th className="grid-th">Email</Th>
          <Th className="grid-th"></Th>
          <Th className="grid-th"></Th>
        </Tr>
      </Thead>
      <Tbody className="grid-tbody">
        {pacientes.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.cpf}</Td>
            <Td width="20%" onlyWeb>
              {item.telefone}
            </Td>
            <Td width="30%">{item.email}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;