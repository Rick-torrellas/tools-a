import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Ilogo} from "./Icons";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-5" >
    <Container>
      <Navbar.Brand >
        <Ilogo className="me-5" />
      Tools
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}
