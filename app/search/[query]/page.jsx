import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import DishCard from '@/app/_components/dish-card'

export default async function SearchResult({ params }) {
  const searchQuery = decodeURIComponent(params.query);
  const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=20&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`)
  const data = await res.json();

  return (
    <Container className="my-4">
      <Row className="mb-3">
        <h5>Search results for &quot;{searchQuery}&quot;</h5>
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
              <Col key={recipeData.id} className="flex-basis mb-4">
                <DishCard {...recipeProps} />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}
