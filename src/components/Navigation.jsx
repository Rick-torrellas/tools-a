import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Icons from "./Icons";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-5" >
    <Container>
      <Navbar.Brand >
        <Icons.Logo width="15%" margin="0 4% 0 -16%" className="me-5" />
      Tools
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}
