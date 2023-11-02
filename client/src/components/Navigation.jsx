import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
      <LinkContainer to="/">
        <Navbar.Brand >
          <img src="https://i.pinimg.com/originals/60/d4/d3/60d4d31e4f2b18abaee11da6281ff6ea.png" style={{width:90, height:60}}/>
          </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
            <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chat">
            <Nav.Link >Chat</Nav.Link>
            </LinkContainer>
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;