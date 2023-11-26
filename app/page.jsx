import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import DishCard from './_components/dish-card';

export default async function Home() {
  const res = await fetch(`https://api.spoonacular.com/recipes/random?number=4&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`);
  const data = await res.json();

  return (
    <Container>
      <Row className="align-items-center">
        <Col style={{ position: "relative", height: "450px" }}>
          <Image
            src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1700869483/katie-smith-uQs1802D0CQ-unsplash_n7wgwf.jpg`}
            alt="Home"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Col>
        <Col>
          <Row>
            <h1>Enter Ingredients, Get Inspired, and Start Cooking!</h1>
          </Row>
          <Row>

          </Row>
        </Col>
      </Row>
      <Row>
        <h2>Popular Dishes</h2>
      </Row>
      <Row>
        {
          data.recipes.map(randomRecipeData => {
            const randomRecipeProps = {
              src: randomRecipeData.image,
              title: randomRecipeData.title,
              readyInMinutes: randomRecipeData.readyInMinutes,
              calories: randomRecipeData.summary.split("calories")[0].split("<b>").pop().replace(" ", "")
            }
            return (
              <Col key={randomRecipeData.id}>
                <DishCard {...randomRecipeProps} />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}
