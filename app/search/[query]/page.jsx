import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import DishCard from '@/app/_components/dish-card'

export default async function SearchResult({ params }) {
  const searchQuery = decodeURIComponent(params.query);
  const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=20&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`)
  const data = await res.json();
  const searchMessage = data.results.length >= 1 ? "Search results for " : "We didn't find any results for ";

  return (
    <Container className="my-4">
      <Row className="mb-3">
        <h5>{searchMessage} &quot;{searchQuery}&quot;</h5>
      </Row>
      <Row className="mb-3">
        {
          data.results.map(recipeData => {
            const recipeProps = {
              id: recipeData.id,
              title: recipeData.title,
              src: recipeData.image
            }
            return (
              <Col md={12} lg={6} xl={4} key={recipeData.id} className="flex-basis mb-4">
                <DishCard {...recipeProps} />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}
