import Link from 'next/link'
import Image from 'next/image'
import { AccessTime, Whatshot } from '@mui/icons-material'
import { Card, Col, Row, Button, Container } from 'react-bootstrap'

export default function DishCard(props) {
  return (
    <Card className="shadow rounded-3 h-100">
      <div style={{ position: "relative", height: "200px"}}>
        <Image
          src={props.src}
          alt={props.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-top-3"
        />
      </div>
      <Row className="mb-2 flex-grow-1 pt-4 px-4">
        <h5>{props.title}</h5>
      </Row>
      <Row className="mb-3 text-muted px-4">
        <Col>
          <div className="d-flex align-items-center">
            <AccessTime />
            <label>&nbsp;{props.readyInMinutes}&nbsp;min</label>
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center">
            <Whatshot />
            <label>&nbsp;{props.calories}&nbsp;Calories</label>
          </div>
        </Col>
      </Row>
      <Row className="px-4 pb-4">
        <Button variant="outline-warning rounded-pill">VIEW RECIPE</Button>
      </Row>
    </Card>
  )
}
