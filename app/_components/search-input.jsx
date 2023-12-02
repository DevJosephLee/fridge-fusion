import { Row, Col, Form } from 'react-bootstrap'
import { Search, Clear } from '@mui/icons-material'

export default function SearchInput() {
  return (
    <Row className="align-items-center shadow w-100 rounded-3 bg-white">
      <Col xl={1} className="d-flex justify-content-center">
        <Search />
      </Col>
      <Col xl={10}>
        <input type="text" className="w-100 p-2" placeholder="eggs,butter,onions..."></input>
      </Col>
      <Col xl={1} className="d-flex justify-content-center">
        <Clear />
      </Col>
    </Row>
  )
}
