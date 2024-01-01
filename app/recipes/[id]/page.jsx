import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { AccessTime, Whatshot } from '@mui/icons-material'
import DishCard from '@/app/_components/dish-card'
import EquipmentCarousel from '@/app/_components/equipment-carousel'
import NutritionCarousel from '@/app/_components/nutrition-carousel'

export default async function Recipes({ params }) {
  const id = params.id;
  const [recipeResponse, similarDishesResponse] =
    await Promise.all([
      fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
      ),
      fetch(
        `https://api.spoonacular.com/recipes/${id}/similar?number=4&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
      )
    ]);
  const [recipeData, similarDishesData] = await Promise.all([
    recipeResponse.json(),
    similarDishesResponse.json()
  ]);

  function removeDuplicates(data) {
    const uniqueObjects = {};

    data.forEach(obj => {
      uniqueObjects[obj.id] = obj;
    });

    const uniqueArray = Object.values(uniqueObjects);

    return uniqueArray;
  };

  const uniqueIngredients = removeDuplicates(recipeData.extendedIngredients);
  const uniqueEquipments = removeDuplicates(recipeData.analyzedInstructions[0].steps
    .flatMap(step => step.equipment)
    .filter(item => item));

  const nutritionData = [0, 3, 5, 7, 8, 1, 2].map(index => {
    return recipeData.nutrition.nutrients[index];
  });

  const noEquipMsg = uniqueEquipments.length >= 1 ? <EquipmentCarousel props={uniqueEquipments} /> : <label className="fst-italic">Equipment Data Not Available</label>;

  return (
    <Container className="my-4">
      <Row className="align-items-center mb-5 mb-md-3 d-flex flex-column-reverse flex-md-row">
        <Col className="d-flex justify-content-center">
          <Row className="col-12 col-xl-8 mb-3 mb-md-5 justify-content-center">
            <Row className="mb-4">
              <h2>{recipeData.title}</h2>
              <label className="text-muted">by {recipeData.sourceName}</label>
            </Row>
            <Row>
              <Col>
                <div className="d-flex align-items-center">
                  <AccessTime />
                  <label>&nbsp;{recipeData.readyInMinutes}&nbsp;min</label>
                </div>
              </Col>
              <Col>
                <div className="d-flex align-items-center">
                  <Whatshot />
                  <label>&nbsp;{Math.trunc(recipeData.nutrition.nutrients[0].amount)}&nbsp;Calories</label>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col className="mb-4 mb-md-0">
          <div style={{ position: "relative", height: "350px" }}>
            <Image
              src={recipeData.image}
              alt={recipeData.title}
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-3"
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
              quality={100}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3 d-flex text-center text-md-start">
        <h2 className="text-decoration-underline">Nutrition Facts</h2>
      </Row>
      <Row className="justify-content-center mb-5" style={{padding: "0 12px"}}>
        <Row className="bg-white shadow rounded-3 p-4">
          <NutritionCarousel props={nutritionData} />
        </Row>
      </Row>
      <Row className="mb-3 d-flex text-center text-md-start">
        <h2 className="text-decoration-underline">Equipments</h2>
      </Row>
      <Row className="mb-5">
        {noEquipMsg}
      </Row>
      <Row className="mb-3 d-flex text-center text-md-start">
        <h2 className="text-decoration-underline">Ingredients</h2>
      </Row>
      <Row className="mb-5" style={{ padding: "0 12px" }}>
        <ul>
          {
            uniqueIngredients.map(ingredient => {
              return (
                <li key={ingredient.id}>
                  <p>
                    {Math.round(ingredient.amount * 100) / 100 + " " + ingredient.unit + " "}
                    <span className="fw-bolder fs-5">{ingredient.originalName}</span>
                  </p>
                </li>
              );
            })
          }
        </ul>
      </Row>
      <Row className="mb-3 d-flex text-center text-md-start">
        <h2 className="text-decoration-underline">Instructions</h2>
      </Row>
      <Row className="mb-5" style={{ padding: "0 12px" }}>
        <ol>
          {
            recipeData.analyzedInstructions[0].steps.map(steps => {
              return (
                <li key={steps.number}>
                  <p>{steps.step}</p>
                </li>
              );
            })
          }
        </ol>
      </Row>
      <Row className="mb-3 d-flex text-center text-md-start">
        <h2 className="text-decoration-underline">Similar Dishes</h2>
      </Row>
      <Row>
        {
          similarDishesData.map(similarDishesData => {
            const similarDishesProps = {
              id: similarDishesData.id,
              src: `https://spoonacular.com/recipeImages/${similarDishesData.id}-636x393.${similarDishesData.imageType}`,
              title: similarDishesData.title,
              readyInMinutes: similarDishesData.readyInMinutes
            };
            return (
              <Col md={12} lg={6} xl={4} key={similarDishesData.id} className="flex-basis mb-4 mb-xl-0">
                <DishCard {...similarDishesProps} />
              </Col>
            );
          })
        }
      </Row>
    </Container>
  )
}
