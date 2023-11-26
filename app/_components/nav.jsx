import Link from 'next/link';
import { Col, Container, Navbar } from "react-bootstrap";

export default function Nav(props) {
  return (
    <Navbar className="shadow">
      <Container>
        <Col>
          <Link className="fs-2 fw-bold fst-italic" href="/">
            FridgeFusion
          </Link>
        </Col>
        <Col className="d-flex justify-content-end">
          <Link href="/">
            HOME
          </Link>
        </Col>
      </Container>
    </Navbar>
  )
}
