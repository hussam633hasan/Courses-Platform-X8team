
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

export default function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./public/assets/images/Nav/logo.png" />
          UpDate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <div className="HH-Row">
              <div className="HH-Col-1">
                <NavDropdown title="Courses" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home" className="HH-nav-link">
                  Teachers
                </Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
              </div>
              <div className="HH-Col-2">
                <NavDropdown title="En" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">French</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Russian
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link" className="HH-nav-link">
                  Sign In
                </Nav.Link>
                <Button variant="dark" className="HH-Nav-button">
                  Trial free
                </Button>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

