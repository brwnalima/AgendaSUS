import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function CreateUserModal(props) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nome, email, senha } = formData;
    props.createUser(nome, email, senha);
    setFormData({ nome: '', email: '', senha: '' });
  };

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal show={props.isModalOpen}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton onClick={props.handleClose}>
            <Modal.Title>Criar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" value={formData.nome} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" value={formData.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" value={formData.senha} onChange={handleInputChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>Close</Button>
            <Button variant="primary" type="submit">Salvar</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default CreateUserModal;
