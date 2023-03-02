import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { BiUserCircle } from 'react-icons/bi'

function Menu() {
  return (
    <Navbar collapseOnSelect className='navbar-content' expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/#home">Agenda SUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#sobre">Sobre</Nav.Link>
            <Nav.Link href="/#help">Serviços</Nav.Link>
            <NavDropdown title="Consultas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#seguros">Como funciona?</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/#contato">Contato</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Login <BiUserCircle/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;