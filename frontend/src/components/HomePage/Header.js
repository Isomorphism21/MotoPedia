import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{margin:"0px"}}>
        <Navbar.Brand href="#home">MotoPedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{gap:"30px"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Consesionarios</Nav.Link>
            <Nav.Link href="#link">Informes</Nav.Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Yamaha</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Honda
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Suzuki</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Kawasaki
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;