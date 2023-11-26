import Link from 'next/link'
import Image from 'next/image'
import { Card, Col, Row, Button } from 'react-bootstrap'

export default function DishCard(props) {
  return (
    <Card className="shadow">
      <Row style={{ position: "relative", height: "200px"}}>
        <Image
          src={props.src}
          alt={props.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Row>
      <Row>
        <h4>{props.title}</h4>
      </Row>
      <Row>
        <Col>
          <p>{props.readyInMinutes}&nbsp;min</p>
        </Col>
        <Col>
          <p>{props.calories}&nbsp;Calories</p>
        </Col>
      </Row>
      <Row>
        <Button variant="outline-primary">VIEW RECIPE</Button>
      </Row>
    </Card>
  )
}
