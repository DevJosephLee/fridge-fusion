import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import DishCard from './_components/dish-card';
import SearchInput from './_components/search-input';

export default async function Home() {
  const res = await fetch(`https://api.spoonacular.com/recipes/random?number=4&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`);
  const data = await res.json();

  return (
    <Container className="my-4">
      <Row className="align-items-center mb-3 d-block d-md-flex">
        <Col className="mb-4 mb-md-0">
          <div style={{ position: "relative", height: "350px" }}>
            <Image
              src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1700869483/katie-smith-uQs1802D0CQ-unsplash_n7wgwf.jpg`}
              alt="Home"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-3"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center">
          <Row className="col-12 col-xl-8 justify-content-center">
            <h1 className="mb-5">Enter Ingredients, Get Inspired, and Start Cooking!</h1>
            <SearchInput />
          </Row>
        </Col>
      </Row>
      <Row className="mb-3 d-flex text-center text-md-start">
        <h2 className="text-decoration-underline">Popular Dishes</h2>
      </Row>
      <Row className="mb-3">
        {
          data.recipes.map(randomRecipeData => {
            const randomRecipeProps = {
              src: randomRecipeData.image,
              title: randomRecipeData.title,
              readyInMinutes: randomRecipeData.readyInMinutes,
              calories: randomRecipeData.summary.split("calories")[0].split("<b>").pop().replace(" ", "")
            }
            return (
              <Col key={randomRecipeData.id} className="flex-basis mb-4 mb-xl-0">
                <DishCard {...randomRecipeProps} />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}
