import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useHistory } from 'react-router-dom';

function BasicExample() {
  const history = useHistory();
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container style={{ margin: "0px" }}>
        <Navbar.Brand onClick={() => {
                history.push('/');
                window.location.reload();
              }}>MotoPedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ gap: "30px" }}>
            <Nav.Link onClick={() => {
                history.push('/');
                window.location.reload();
              }}>Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Consesionarios</Nav.Link>
            <Nav.Link href="#link">Informes</Nav.Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                history.push('/motos-yamaha');
                window.location.reload();
              }}>
                Yamaha
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                history.push('/motos-honda');
                window.location.reload();
              }}>
                Honda
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                history.push('/motos-suzuki');
                window.location.reload();
              }}>
                Suzuki
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                history.push('/motos-kawasaki');
                window.location.reload();
              }}>
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