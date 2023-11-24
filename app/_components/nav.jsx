import Link from 'next/link';
import { Col, Container, Navbar } from "react-bootstrap";

export default function Nav(props) {
  return (
    <Navbar>
      <Container>
        <Col>
          <Link href="/">
            <h2 className="fst-italic">FridgeFusion</h2>
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
